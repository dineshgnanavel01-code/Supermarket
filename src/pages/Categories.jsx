import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  ["🥦", "Vegetables"],
  ["🍎", "Fruits"],
  ["🥛", "Dairy & Eggs"],
  ["🌾", "Rice & Grains"],
  ["🫘", "Pulses"],
  ["🫒", "Oil & Ghee"],
  ["🍪", "Snacks"],
  ["🥤", "Beverages"],
  ["🍞", "Bakery"],
  ["🧴", "Personal Care"],
  ["🧹", "Household"],
  ["🍫", "Chocolates"],
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-semibold text-green-600">EXPLORE</p>
          <h1 className="mt-2 text-5xl font-black text-slate-900 dark:text-white">
            Shop Categories
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Find everything you need for your everyday shopping.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map(([emoji, name], index) => (
            <motion.button
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.03 }}
              onClick={() =>
                navigate(`/products?category=${encodeURIComponent(name)}`)
              }
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="text-5xl">{emoji}</div>
              <h2 className="mt-5 font-bold text-slate-900 dark:text-white">
                {name}
              </h2>
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  );
}