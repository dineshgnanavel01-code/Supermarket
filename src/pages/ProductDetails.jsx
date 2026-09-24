import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Share2,
} from 'lucide-react';
import products from '../data/products';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const p = products.find((x) => x.id === Number(id)) || products[0];

  const [qty, setQty] = useState(1);
  const [pin, setPin] = useState('');
  const [pinChecked, setPinChecked] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const { add, toggleWish, wishlist } = useShop();
  const isWishlisted = wishlist.some((x) => x.id === p.id);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      add(p);
    }
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleCheckPin = (e) => {
    e.preventDefault();
    if (pin.trim().length >= 6) {
      setPinChecked(true);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumbs Navigation */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link to="/" className="hover:text-emerald-600 transition">
          Home
        </Link>
        <ChevronRight size={14} className="text-slate-300" />
        <Link to="/products" className="hover:text-emerald-600 transition">
          Products
        </Link>
        <ChevronRight size={14} className="text-slate-300" />
        <span className="text-slate-900 truncate max-w-[200px]">{p.name}</span>
      </nav>

      {/* Main Product Showcase Card */}
      <div className="grid gap-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:grid-cols-2 lg:p-10">
        {/* Left: Product Image & Gallery Display */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
            <motion.img
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              src={p.image}
              alt={p.name}
              className="h-[380px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px]"
            />
            {p.oldPrice && (
              <span className="absolute top-4 left-4 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-bold text-white shadow-md">
                SAVE ₹{p.oldPrice - p.price}
              </span>
            )}
            <button
              onClick={() => toggleWish(p)}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-xs transition hover:scale-110 active:scale-95"
            >
              <Heart
                size={18}
                fill={isWishlisted ? 'currentColor' : 'none'}
                className={isWishlisted ? 'text-rose-500' : 'text-slate-400'}
              />
            </button>
          </div>
        </div>

        {/* Right: Product Details & Purchase Controls */}
        <div className="flex flex-col">
          {/* Category Pill */}
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
              {p.category}
            </span>
            <button
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-600 transition"
            >
              <Share2 size={14} />
              <span>Share</span>
            </button>
          </div>

          <h1 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
            {p.name}
          </h1>

          {/* Ratings */}
          <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-amber-600 border border-amber-100">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span>{p.rating}</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-medium">{p.reviews} verified reviews</span>
          </div>

          {/* Pricing Row */}
          <div className="mt-6 flex items-baseline gap-3">
            <b className="text-3xl font-black text-slate-900">₹{p.price}</b>
            {p.oldPrice && (
              <del className="text-base font-semibold text-slate-400">
                ₹{p.oldPrice}
              </del>
            )}
            <span className="text-xs font-bold text-emerald-600">Inclusive of all taxes</span>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-600">
            Fresh, carefully selected, and packed for your everyday needs. Sourced directly from trusted partners to guarantee standard quality and maximum fresh shelf life.
          </p>

          <div className="my-6 border-t border-slate-100" />

          {/* Quantity and Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-1">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-xs text-slate-600 hover:bg-slate-100 transition active:scale-95"
              >
                <Minus size={14} />
              </button>
              <span className="w-10 text-center text-xs font-bold text-slate-900">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-xs text-slate-600 hover:bg-slate-100 transition active:scale-95"
              >
                <Plus size={14} />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-[0.99]"
            >
              <ShoppingCart size={16} />
              <span>Add {qty > 1 ? `${qty} Items` : 'to Cart'}</span>
            </button>
          </div>

          {/* Success Toast Notice */}
          {addedToast && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2.5 text-xs font-semibold text-emerald-800"
            >
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Added {qty} × {p.name} to your cart!</span>
            </motion.div>
          )}

          {/* Delivery Check Section */}
          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Truck size={16} className="text-emerald-600" />
              <span>Check Express Delivery Availability</span>
            </div>

            <form onSubmit={handleCheckPin} className="mt-3 flex gap-2">
              <input
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setPinChecked(false);
                }}
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
                placeholder="Enter 6-digit Pincode"
                maxLength={6}
              />
              <button
                type="submit"
                className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-slate-800"
              >
                Check
              </button>
            </form>

            {pinChecked && (
              <p className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 size={14} />
                <span>Express 30-min delivery available for {pin}</span>
              </p>
            )}
          </div>

          {/* Trust Guarantees */}
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5 text-[11px] text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>100% Quality Promise</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw size={16} className="text-emerald-600" />
              <span>Easy Return Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <section className="py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            You May Also Like
          </h2>
          <Link
            to="/products"
            className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
          >
            Explore All →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products
            .filter((x) => x.id !== p.id)
            .slice(0, 4)
            .map((x) => (
              <ProductCard key={x.id} product={x} />
            ))}
        </div>
      </section>
    </main>
  );
}