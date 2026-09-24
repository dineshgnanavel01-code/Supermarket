import { motion, AnimatePresence } from 'framer-motion';
import { PackageSearch, RefreshCw } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onResetFilters }) {
  if (!products.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mx-auto my-8 flex max-w-md flex-col items-center justify-center rounded-3xl border border-slate-100 bg-gradient-to-b from-slate-50/50 to-white p-10 text-center shadow-sm"
      >
        {/* Animated Icon Box */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
          <PackageSearch size={38} className="stroke-[1.5]" />
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </span>
        </div>

        {/* Text Details */}
        <h3 className="mt-5 text-xl font-bold text-slate-800">
          No products found
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          We couldn't find anything matching your search. Try tweaking your search terms or clearing active filters.
        </p>

        {/* Optional Action Button */}
        {onResetFilters && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onResetFilters}
            className="mt-6 flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-emerald-600"
          >
            <RefreshCw size={14} />
            <span>Reset Filters</span>
          </motion.button>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4"
    >
      <AnimatePresence>
        {products.map((p, index) => (
          <motion.div
            key={p.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.3,
              delay: index * 0.04, // Staggered entry effect
              ease: 'easeOut',
            }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}