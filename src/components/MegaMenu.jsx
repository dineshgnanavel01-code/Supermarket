import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";

const MegaMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-3"
    >
      <div className="rounded-3xl border border-green-100 bg-white p-5 shadow-2xl">
        <div className="mb-4">
          <div className="text-lg font-black text-gray-900">
            Shop Categories
          </div>

          <div className="text-xs text-gray-400">
            Everything you need, delivered fresh.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                to={`/products?category=${encodeURIComponent(
                  category.name
                )}`}
                className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-green-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Icon size={19} />
                </div>

                <span className="text-sm font-bold">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;