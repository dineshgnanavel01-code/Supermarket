
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product }) {
  const { add, toggleWish, wishlist } = useShop();

  const liked = wishlist.some((item) => item.id === product.id);

  // Calculate discount percentage
  const discountPercent = product.oldPrice
    ? Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
      )
    : null;

  return (
    <motion.article
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-500/5"
    >
      {/* ================= IMAGE ================= */}
      <div>
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
          <Link
            to={`/products/${product.id}`}
            className="block h-full w-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=85";
              }}
            />
          </Link>

          {/* Badges */}
          <div className="absolute left-2.5 top-2.5 flex flex-col items-start gap-1">
            {product.badge && (
              <span className="rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md">
                {product.badge}
              </span>
            )}

            {discountPercent && discountPercent > 0 && (
              <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                -{discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Wishlist */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => toggleWish(product)}
            className={`absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md transition-colors ${
              liked
                ? "bg-rose-50 text-rose-500 shadow-sm"
                : "bg-white/80 text-slate-400 hover:bg-white hover:text-rose-500"
            }`}
            aria-label={
              liked
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
          >
            <Heart
              size={16}
              fill={liked ? "currentColor" : "none"}
            />
          </motion.button>
        </div>

        {/* ================= PRODUCT DETAILS ================= */}
        <div className="mt-3 flex flex-col gap-1 px-1">
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span>{product.brand || "DinaMart"}</span>
            <span>{product.unit || "1 unit"}</span>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="line-clamp-2 text-sm font-semibold text-slate-800 transition-colors group-hover:text-emerald-600"
          >
            {product.name}
          </Link>

          {/* Rating */}
          <div className="mt-1 flex items-center gap-1.5">
            <div className="flex items-center gap-1 rounded-md bg-amber-50 px-1.5 py-0.5 text-xs font-semibold text-amber-700">
              <Star
                size={13}
                className="fill-amber-400 text-amber-400"
              />
              <span>{product.rating || "4.8"}</span>
            </div>

            <span className="text-xs text-slate-400">
              ({product.reviews || 0})
            </span>
          </div>
        </div>
      </div>

      {/* ================= PRICE + CART ================= */}
      <div className="mt-4 flex items-end justify-between border-t border-slate-100 px-1 pt-3">
        <div className="flex flex-col">
          {product.oldPrice && (
            <del className="text-xs text-slate-400">
              ₹{product.oldPrice}
            </del>
          )}

          <span className="text-lg font-bold leading-none text-slate-900">
            ₹{product.price}
          </span>
        </div>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => add(product)}
          className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30"
        >
          <ShoppingCart size={15} />
          <span>Add</span>
        </motion.button>
      </div>
    </motion.article>
  );
}
