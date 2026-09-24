import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
} from 'lucide-react';
import { useState } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const { wishlist, add, clearWishlist } = useShop();
  const [toastMessage, setToastMessage] = useState('');

  // Move all items from Wishlist into Cart
  const handleMoveAllToCart = () => {
    if (!wishlist.length) return;
    wishlist.forEach((product) => add(product));
    setToastMessage(`Moved ${wishlist.length} items to your cart!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 p-6 text-white shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold text-lime-300 backdrop-blur-xs border border-lime-300/20">
            <Sparkles size={12} /> SAVED FOR LATER
          </span>
          <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            My Wishlist
          </h1>
          <p className="mt-1 text-xs text-emerald-100/80">
            Keep track of items you love and add them to your cart anytime.
          </p>
        </div>

        {wishlist.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleMoveAllToCart}
              className="flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-400 transition active:scale-95"
            >
              <ShoppingCart size={15} />
              <span>Move All to Cart</span>
            </button>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold text-emerald-800"
        >
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>{toastMessage}</span>
        </motion.div>
      )}

      {/* Main Content Area */}
      <div className="mt-8">
        {wishlist.length > 0 ? (
          <div>
            {/* Counter bar */}
            <div className="mb-4 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>
                Saved Items (<b className="text-slate-900">{wishlist.length}</b>)
              </span>
              <button
                onClick={clearWishlist}
                className="flex items-center gap-1 text-[11px] font-semibold text-rose-500 hover:text-rose-600 transition"
              >
                <Trash2 size={13} />
                <span>Clear Wishlist</span>
              </button>
            </div>

            {/* Product Grid */}
            <motion.div
              layout
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              <AnimatePresence>
                {wishlist.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        ) : (
          /* Empty Wishlist State */
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white p-12 text-center shadow-xs"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-50 text-rose-500 shadow-inner">
              <Heart size={36} fill="currentColor" className="opacity-80" />
            </div>

            <h2 className="mt-5 text-xl font-black text-slate-900">
              Your Wishlist is Empty
            </h2>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-500">
              You haven't saved any grocery items yet. Explore our fresh catalog and save your favorites!
            </p>

            <Link
              to="/products"
              className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition active:scale-95"
            >
              <ShoppingBag size={15} />
              <span>Explore Products</span>
              <ArrowRight size={14} />
            </Link>

            {/* Category Quicklinks */}
            <div className="mt-10 border-t border-slate-100 pt-6 w-full max-w-md">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Popular Categories to Explore
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {['Fresh Produce', 'Fruits', 'Grocery Essentials', 'Snacks & Beverages'].map(
                  (cat) => (
                    <Link
                      key={cat}
                      to={`/products?category=${encodeURIComponent(cat)}`}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 transition"
                    >
                      {cat}
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}