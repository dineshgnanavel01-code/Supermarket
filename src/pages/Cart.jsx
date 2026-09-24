import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingBag,
  Tag,
  ShieldCheck,
  Truck,
  ArrowLeft,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Cart() {
  const { cart, update, remove, subtotal, delivery, discount, total } =
    useShop();
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  // Empty state view
  if (!cart.length) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto max-w-md rounded-3xl border border-slate-100 bg-gradient-to-b from-slate-50/50 to-white p-10 shadow-sm"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
            <ShoppingBag size={40} className="stroke-[1.5]" />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-slate-900">
            Your cart is empty
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            Looks like you haven't added any fresh groceries yet. Explore our
            pantry and stock up on daily essentials.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 hover:shadow-emerald-600/35"
          >
            <span>Start Shopping</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Top Header */}
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900 sm:text-3xl">
            Shopping Cart
          </h1>
          <p className="text-xs text-slate-500">
            You have{' '}
            <span className="font-semibold text-emerald-600">
              {cart.reduce((acc, item) => acc + (item.qty || 1), 0)} items
            </span>{' '}
            in your cart
          </p>
        </div>

        <Link
          to="/products"
          className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition hover:text-emerald-600 md:mt-0"
        >
          <ArrowLeft size={16} />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {/* Main Grid */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Left: Cart Items List */}
        <section className="flex flex-col gap-4">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="group relative flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:border-emerald-100 hover:shadow-md"
              >
                {/* Product Image */}
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between w-full">
                  <div className="flex items-start justify-between">
                    <div>
                      <Link
                        to={`/products/${item.id}`}
                        className="text-sm font-bold text-slate-800 transition hover:text-emerald-600"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-slate-400">
                        ₹{item.price} • {item.unit}
                      </p>
                    </div>

                    {/* Price per line */}
                    <span className="text-base font-bold text-slate-900">
                      ₹{item.price * item.qty}
                    </span>
                  </div>

                  {/* Quantity & Delete Actions */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 p-0.5">
                      <button
                        onClick={() => update(item.id, -1)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-600 hover:bg-white hover:text-emerald-600 transition"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-slate-800">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => update(item.id, 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-600 hover:bg-white hover:text-emerald-600 transition"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => remove(item.id)}
                      className="flex items-center gap-1 text-xs font-medium text-rose-500 hover:text-rose-600 transition"
                    >
                      <Trash2 size={15} />
                      <span className="hidden sm:inline">Remove</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Value Badges */}
          <div className="mt-2 grid grid-cols-2 gap-3 text-xs text-slate-500 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-3 shadow-xs">
              <Truck size={18} className="text-emerald-600" />
              <span>Free delivery over ₹499</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white p-3 shadow-xs">
              <ShieldCheck size={18} className="text-emerald-600" />
              <span>100% Quality Guaranteed</span>
            </div>
          </div>
        </section>

        {/* Right: Order Summary */}
        <aside className="h-fit rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>

          {/* Coupon Box */}
          <div className="mt-4 flex items-center gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-3 text-slate-400" size={16} />
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Coupon (e.g. SAVE100)"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-9 pr-3 text-xs font-semibold text-slate-800 transition focus:border-emerald-500 focus:bg-white focus:outline-none"
              />
            </div>
            <button
              onClick={() => setCouponApplied(true)}
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-600"
            >
              Apply
            </button>
          </div>

          {/* Cost Line Items */}
          <div className="mt-5 flex flex-col gap-3 text-xs font-semibold text-slate-600">
            <div className="flex justify-between">
              <span className="text-slate-400">Subtotal</span>
              <span className="text-slate-800">₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Estimated Delivery</span>
              <span
                className={
                  delivery === 0 ? 'text-emerald-600 font-bold' : 'text-slate-800'
                }
              >
                {delivery ? `₹${delivery}` : 'FREE'}
              </span>
            </div>

            {discount > 0 && (
              <div className="flex justify-between text-emerald-600">
                <span>Discount Applied</span>
                <span>-₹{discount}</span>
              </div>
            )}

            <div className="my-1 border-t border-slate-100" />

            <div className="flex justify-between text-base font-bold text-slate-900">
              <span>Total Amount</span>
              <span className="text-emerald-600">₹{total}</span>
            </div>
          </div>

          {/* Primary CTA */}
          <Link
            to="/checkout"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 hover:shadow-emerald-600/35"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight size={16} />
          </Link>
        </aside>
      </div>
    </main>
  );
}