import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Send,
  MapPin,
  Clock,
  ShieldCheck,
  Share2,
  Globe,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-800 bg-gradient-to-b from-slate-950 via-emerald-950/40 to-slate-950 text-slate-300 overflow-hidden">
      {/* Top Accent Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-600 shadow-sm shadow-emerald-500/50" />

      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-lime-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Brand & Logo Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-4"
          >
            <Link to="/" className="group inline-flex items-center gap-2.5">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-green-500 text-xl font-black text-white shadow-lg shadow-emerald-600/30 transition duration-300 group-hover:rotate-6">
                D
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight text-white">
                  Dina<span className="text-emerald-400">Mart</span>
                </div>
                <div className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
                  Fresh & Express
                </div>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Fresh groceries, everyday essentials, and delightful deals delivered right to your doorstep with care and speed.
            </p>

            {/* Live Delivery Badge */}
            <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-950/80 border border-emerald-800/60 px-3.5 py-2 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Clock size={13} className="text-emerald-400" />
              <span>30-Min Fast Express Delivery</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {[Share2, Globe, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-emerald-500/50 hover:bg-emerald-950 hover:text-emerald-400 transition"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Columns */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-8 lg:col-span-4"
          >
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Shop Catalog
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs font-semibold">
                {[
                  { name: "All Products", path: "/products" },
                  { name: "Fresh Produce", path: "/products?category=Fresh Produce" },
                  { name: "Grocery Essentials", path: "/products?category=Grocery Essentials" },
                  { name: "Dairy & Bakery", path: "/products?category=Dairy & Bakery" },
                  { name: "Snacks & Drinks", path: "/products?category=Snacks & Beverages" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="group flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Account & Help
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs font-semibold">
                {[
                  { name: "My Profile", path: "/account" },
                  { name: "Shopping Cart", path: "/cart" },
                  { name: "My Wishlist", path: "/wishlist" },
                  { name: "Order History", path: "/account" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="group flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-lime-400" />
              <h4 className="text-xs font-black uppercase tracking-wider text-white">
                Stay In The Loop
              </h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to unlock weekly discounts, fresh daily arrivals, and instant coupon drops.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-xs text-white placeholder-slate-500 transition-all focus:border-emerald-500 focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center gap-1.5 rounded-2xl bg-emerald-500 px-5 py-3 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-400 transition-all"
              >
                <span>Join</span>
                <Send size={13} />
              </motion.button>
            </form>

            <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-emerald-400" />
                No Spam Guarantee
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin size={14} className="text-emerald-400" />
                Bengaluru Hub
              </span>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-slate-800/80 pt-8 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 DinaMart Inc. All rights reserved.</p>
          <div className="flex gap-6 font-semibold text-slate-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}