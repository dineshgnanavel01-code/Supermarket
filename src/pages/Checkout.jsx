import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Clock,
  CreditCard,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Truck,
  ArrowRight,
  Wallet,
  Banknote,
  ChevronLeft,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Checkout() {
  const { cart, total, subtotal, delivery, discount, clearCart } = useShop();
  const navigate = useNavigate();

  const [done, setDone] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('8 AM – 12 PM');
  const [paymentMethod, setPaymentMethod] = useState('upi');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const slots = [
    { id: 1, label: '8 AM – 12 PM', tag: 'Morning' },
    { id: 2, label: '12 PM – 4 PM', tag: 'Afternoon' },
    { id: 3, label: '4 PM – 8 PM', tag: 'Evening' },
  ];

  const paymentOptions = [
    { id: 'upi', label: 'UPI / GPay / PhonePe', icon: Wallet, desc: 'Instant & Zero Fee' },
    { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, RuPay' },
    { id: 'cod', label: 'Cash on Delivery', icon: Banknote, desc: 'Pay when delivered' },
  ];

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setDone(true);
    if (clearCart) clearCart();
  };

  // Empty Cart State
  if (!cart.length && !done) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-md rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
            <ShoppingBag size={32} />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Your cart is empty</h1>
          <p className="mt-2 text-xs text-slate-500">
            Please add items to your cart before proceeding to checkout.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700"
          >
            Explore Supermarket
          </Link>
        </div>
      </main>
    );
  }

  // Success Confirmation State
  if (done) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mx-auto max-w-lg rounded-3xl border border-slate-100 bg-gradient-to-b from-emerald-50/40 to-white p-8 shadow-xl shadow-emerald-900/5 sm:p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
          >
            <CheckCircle2 size={44} />
          </motion.div>

          <span className="mt-6 inline-block rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-800">
            ORDER #DM-{Math.floor(100000 + Math.random() * 900000)}
          </span>

          <h1 className="mt-3 text-3xl font-black text-slate-900">Order Confirmed!</h1>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            Thank you for shopping with DinaMart! Your order total is{' '}
            <b className="text-slate-900">₹{total}</b>. We will notify you once your groceries are out for delivery slot (<span className="text-emerald-700 font-semibold">{selectedSlot}</span>).
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate('/products')}
              className="w-full sm:w-auto rounded-xl bg-emerald-600 px-7 py-3 text-xs font-bold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-700 transition"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate('/account')}
              className="w-full sm:w-auto rounded-xl border border-slate-200 bg-white px-7 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              Track Order
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Back Link */}
      <Link
        to="/cart"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition"
      >
        <ChevronLeft size={16} />
        <span>Back to Cart</span>
      </Link>

      <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">Checkout</h1>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Main Details Form */}
        <form onSubmit={handlePlaceOrder} className="flex flex-col gap-8">
          {/* Section 1: Delivery Address */}
          <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm">
                1
              </div>
              <h2 className="text-base font-bold text-slate-900">Delivery Address</h2>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-slate-600">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs font-medium text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs font-medium text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-slate-600">Complete Address</label>
                <input
                  required
                  type="text"
                  placeholder="Flat / House No., Street, Area"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs font-medium text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">City</label>
                <input
                  required
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs font-medium text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">Pincode</label>
                <input
                  required
                  type="text"
                  placeholder="6-digit Pincode"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs font-medium text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Preferred Delivery Time */}
          <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm">
                2
              </div>
              <h2 className="text-base font-bold text-slate-900">Preferred Delivery Slot</h2>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {slots.map((s) => {
                const active = selectedSlot === s.label;
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSelectedSlot(s.label)}
                    className={`flex flex-col items-start rounded-2xl border p-4 text-left transition ${
                      active
                        ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        active ? 'text-emerald-700' : 'text-slate-400'
                      }`}
                    >
                      {s.tag}
                    </span>
                    <span className="mt-1 text-sm font-bold text-slate-800">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Section 3: Payment Method */}
          <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xs">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 font-bold text-sm">
                3
              </div>
              <h2 className="text-base font-bold text-slate-900">Payment Option</h2>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {paymentOptions.map((opt) => {
                const Icon = opt.icon;
                const active = paymentMethod === opt.id;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setPaymentMethod(opt.id)}
                    className={`flex flex-col justify-between rounded-2xl border p-4 text-left transition ${
                      active
                        ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <Icon
                      size={20}
                      className={active ? 'text-emerald-600' : 'text-slate-400'}
                    />
                    <div className="mt-3">
                      <p className="text-xs font-bold text-slate-800">{opt.label}</p>
                      <p className="text-[11px] text-slate-400">{opt.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </form>

        {/* Order Summary Sidebar */}
        <aside className="h-fit rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>

          {/* Mini Items List */}
          <div className="mt-4 flex max-h-48 flex-col gap-3 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5 truncate">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 rounded-lg object-cover bg-slate-50"
                  />
                  <div className="truncate">
                    <p className="font-semibold text-slate-800 truncate">{item.name}</p>
                    <p className="text-[11px] text-slate-400">Qty: {item.qty}</p>
                  </div>
                </div>
                <span className="font-bold text-slate-800">₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          {/* Pricing Breakdown */}
          <div className="mt-5 flex flex-col gap-2.5 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-600">
            <div className="flex justify-between">
              <span className="text-slate-400">Subtotal</span>
              <span className="text-slate-800">₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Delivery Charge</span>
              <span className={delivery === 0 ? 'text-emerald-600 font-bold' : 'text-slate-800'}>
                {delivery ? `₹${delivery}` : 'FREE'}
              </span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-emerald-600">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}

            <div className="my-1 border-t border-slate-100" />

            <div className="flex justify-between text-base font-bold text-slate-900">
              <span>Total Pay</span>
              <span className="text-emerald-600">₹{total}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePlaceOrder}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 hover:shadow-emerald-600/35"
          >
            <span>Confirm & Place Order</span>
            <ArrowRight size={16} />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Encrypted & Safe Checkout</span>
          </div>
        </aside>
      </div>
    </main>
  );
}