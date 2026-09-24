import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  UserRound,
  Sun,
  Moon,
  Home,
  Package,
  Grid2X2,
  Flame,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cartCount = 0, darkMode, setDarkMode } = useShop();

  // Sync Tailwind HTML 'dark' class on mode change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const links = [
    { label: "Home", path: "/", icon: Home },
    { label: "Products", path: "/products", icon: Package },
    { label: "Categories", path: "/categories", icon: Grid2X2 },
    { label: "Deals", path: "/deals", icon: Flame },
    { label: "About", path: "/about", icon: Info },
  ];

  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
    setSearchOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const value = search.trim();
    if (!value) return;

    navigate(`/products?search=${encodeURIComponent(value)}`);
    setSearch("");
    setSearchOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* LOGO */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => goTo("/")}
          className="flex items-center gap-3 focus:outline-none"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-xl text-white shadow-lg shadow-green-600/30">
            🛒
          </div>
          <div className="text-left">
            <p className="text-xl font-black text-slate-900 dark:text-white">
              Dina<span className="text-green-600"> Mart</span>
            </p>
            <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
              Freshness Everyday
            </p>
          </div>
        </motion.button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo(item.path)}
                className="group flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-green-600 dark:text-slate-300 dark:hover:text-green-400"
              >
                <Icon
                  size={17}
                  className="opacity-70 transition-transform group-hover:scale-110"
                />
                {item.label}
              </motion.button>
            );
          })}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          
          {/* SEARCH TRIGGER */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Search size={19} />
          </motion.button>

          {/* DARK MODE TOGGLE */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={darkMode ? "dark" : "light"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? <Sun size={19} className="text-amber-400" /> : <Moon size={19} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* ACCOUNT */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goTo("/account")}
            aria-label="My Account"
            className="hidden h-11 w-11 items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-800 sm:flex"
          >
            <UserRound size={19} />
          </motion.button>

          {/* CART BUTTON WITH BADGE ANIMATION */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => goTo("/cart")}
            aria-label="Shopping cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg shadow-green-600/20 hover:bg-green-700"
          >
            <ShoppingCart size={19} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: [1.3, 1] }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-black text-white ring-2 ring-white dark:ring-slate-950"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* HAMBURGER TOGGLE */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-green-50 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 lg:hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X size={21} /> : <Menu size={21} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* EXPANDABLE SEARCH PANEL */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
          >
            <form onSubmit={handleSearch} className="mx-auto max-w-3xl px-4 py-3">
              <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 shadow-inner border border-slate-200 dark:border-slate-700 dark:bg-slate-800">
                <Search size={18} className="shrink-0 text-slate-400" />
                <input
                  autoFocus
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search groceries, fruits, vegetables..."
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="text-slate-400 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden"
          >
            <nav className="space-y-1 p-4">
              {links.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.label}
                    type="button"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    onClick={() => goTo(item.path)}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <Icon size={18} className="text-slate-400" />
                    {item.label}
                  </motion.button>
                );
              })}

              <motion.button
                type="button"
                whileHover={{ x: 5 }}
                onClick={() => goTo("/account")}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <UserRound size={18} className="text-slate-400" />
                My Account
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ x: 5 }}
                onClick={() => goTo("/cart")}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <span className="flex items-center gap-3">
                  <ShoppingCart size={18} className="text-slate-400" />
                  Shopping Cart
                </span>
                {cartCount > 0 && (
                  <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-black text-white">
                    {cartCount}
                  </span>
                )}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}