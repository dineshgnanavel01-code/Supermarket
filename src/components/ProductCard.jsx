import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
} from "lucide-react";

import { useShop } from "../context/ShopContext";

export default function ProductCard({ product, onQuickView }) {
  const {
    addToCart,
    wishlist,
    toggleWishlist,
  } = useShop();

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{
        y: -12,
        rotateX: 2,
        rotateY: -2,
        scale: 1.015,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      style={{
        transformPerspective: 1000,
      }}
      className="
        group relative overflow-hidden rounded-3xl
        border border-slate-200
        bg-white shadow-sm
        transition-shadow duration-500
        hover:shadow-2xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Badge */}
      {product.badge && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="
            absolute left-4 top-4 z-10
            rounded-full bg-green-600
            px-3 py-1 text-xs font-bold text-white
          "
        >
          {product.badge}
        </motion.span>
      )}

      {/* Wishlist */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.15 }}
        onClick={() => toggleWishlist(product)}
        className="
          absolute right-4 top-4 z-10
          flex h-10 w-10 items-center
          justify-center rounded-full
          bg-white/90 shadow-md
          dark:bg-slate-800/90
        "
      >
        <Heart
          size={19}
          className={
            isWishlisted
              ? "fill-red-500 text-red-500"
              : "text-slate-600 dark:text-slate-200"
          }
        />
      </motion.button>

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-slate-50 dark:bg-slate-800">
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          whileHover={{
            scale: 1.12,
            rotate: 2,
          }}
          transition={{
            duration: 0.5,
          }}
        />

        {/* Image overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="
            absolute inset-0
            flex items-center justify-center
            bg-black/20
          "
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: 3,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onQuickView?.(product)}
            className="
              rounded-full bg-white px-5 py-3
              font-semibold text-slate-900 shadow-xl
            "
          >
            <Eye size={18} className="mr-2 inline" />
            Quick View
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-1 text-sm text-green-600">
          {product.category}
        </p>

        <h3 className="
          line-clamp-1 text-lg font-bold
          text-slate-900
          dark:text-white
        ">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm font-semibold">
            {product.rating}
          </span>

          <span className="text-xs text-slate-400">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="
              text-xl font-black
              text-slate-900 dark:text-white
            ">
              ₹{product.price}
            </span>

            {product.oldPrice && (
              <span className="
                ml-2 text-sm text-slate-400
                line-through
              ">
                ₹{product.oldPrice}
              </span>
            )}
          </div>

          <motion.button
            whileHover={{
              scale: 1.08,
              rotate: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => addToCart(product)}
            className="
              flex h-11 w-11 items-center
              justify-center rounded-xl
              bg-green-600 text-white
              shadow-lg shadow-green-600/20
            "
          >
            <ShoppingCart size={19} />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}