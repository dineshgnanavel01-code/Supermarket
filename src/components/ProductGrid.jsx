import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  onQuickView,
}) {
  if (!products.length) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="
          col-span-full
          rounded-3xl
          border border-dashed
          border-slate-300
          p-16 text-center
          dark:border-slate-700
        "
      >
        <div className="text-5xl">
          🛒
        </div>

        <h3 className="
          mt-4 text-xl font-black
        ">
          No products found
        </h3>

        <p className="
          mt-2 text-slate-500
        ">
          Try changing your search or filters.
        </p>
      </motion.div>
    );
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </>
  );
}