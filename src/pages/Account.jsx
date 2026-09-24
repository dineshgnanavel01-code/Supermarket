import { motion } from "framer-motion";
import {
  UserRound,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
} from "lucide-react";

export default function Account() {
  const options = [
    [Package, "My Orders", "View your previous orders"],
    [Heart, "Wishlist", "Products you saved"],
    [MapPin, "Addresses", "Manage delivery addresses"],
    [Settings, "Settings", "Manage your account"],
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-white"
        >
          <div className="flex items-center gap-5">
            <div className="rounded-full bg-white/20 p-5">
              <UserRound size={40} />
            </div>

            <div>
              <p className="text-green-100">Welcome back</p>
              <h1 className="text-3xl font-black">
                My Account
              </h1>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {options.map(([Icon, title, text], index) => (
            <motion.button
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-5 rounded-3xl bg-white p-6 text-left shadow-sm dark:bg-slate-900"
            >
              <div className="rounded-2xl bg-green-100 p-4 text-green-600 dark:bg-green-900/30">
                <Icon />
              </div>

              <div>
                <h2 className="font-bold text-slate-900 dark:text-white">
                  {title}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {text}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <button className="mt-8 flex items-center gap-2 rounded-xl border border-red-200 px-5 py-3 font-bold text-red-500">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </main>
  );
}