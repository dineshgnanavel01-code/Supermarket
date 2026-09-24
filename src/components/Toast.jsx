import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ShoppingBag } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useShop();

  if (!quickViewProduct) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative z-10 w-full max-w-2xl rounded-3xl border border-border bg-surface p-6 shadow-premium overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute right-4 top-4 text-text-muted hover:text-text z-20"
          >
            <X size={20} />
          </button>

          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            className="h-64 w-full rounded-2xl object-cover border border-border"
          />

          <div className="flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold text-primary-light uppercase">
                {quickViewProduct.category}
              </span>
              <h2 className="text-xl font-extrabold text-text-heading mt-1">{quickViewProduct.name}</h2>

              <div className="flex items-center gap-1.5 text-xs text-text-muted mt-2">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                <span className="font-bold text-text">{quickViewProduct.rating}</span>
                <span>({quickViewProduct.reviews} reviews)</span>
              </div>

              <p className="text-xs text-text-secondary mt-3 leading-relaxed">
                {quickViewProduct.description}
              </p>
            </div>

            <div className="space-y-3 border-t border-border-soft pt-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-text-heading">₹{quickViewProduct.price}</span>
                {quickViewProduct.oldPrice && (
                  <span className="text-xs text-text-muted line-through">₹{quickViewProduct.oldPrice}</span>
                )}
              </div>

              <button
                onClick={() => {
                  addToCart(quickViewProduct);
                  setQuickViewProduct(null);
                }}
                className="w-full btn btn-primary py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} /> Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}