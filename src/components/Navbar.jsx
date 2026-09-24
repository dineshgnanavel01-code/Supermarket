import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  UserRound,
  MapPin,
  ChevronDown,
  Package,
  Sparkles,
  Clock3,
  BadgePercent,
  Compass,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTheme } from "../context/ThemeContext";

const categories = [
  { name: "Fruits & Vegetables", emoji: "🥦", path: "/products?category=fruits" },
  { name: "Dairy & Bakery", emoji: "🥛", path: "/products?category=dairy" },
  { name: "Grocery Essentials", emoji: "🛒", path: "/products?category=grocery" },
  { name: "Snacks & Beverages", emoji: "🍪", path: "/products?category=snacks" },
  { name: "Home Care", emoji: "🧼", path: "/products?category=home" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { cart = [], wishlist = [] } = useShop();
  const { darkMode, toggleDarkMode } = useTheme();

  const cartCount = cart.reduce(
    (total, item) => total + (Number(item?.qty) || 1),
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const value = search.trim();
    if (!value) return;
    navigate(`/products?search=${encodeURIComponent(value)}`);
    closeMobile();
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setCategoryOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* ANNOUNCEMENT BAR */}
      <div className="hidden bg-emerald-950 text-white sm:block">
        <div className="mx-auto flex min-h-9 w-full max-w-[1500px] items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <Sparkles
              size={14}
              className="shrink-0 animate-pulse text-yellow-300"
            />
            <span className="truncate text-[10px] font-medium sm:text-xs">
              Fresh groceries delivered to your door in as little as 30 minutes
            </span>
          </div>

          <div className="hidden shrink-0 items-center gap-3 text-[10px] font-medium text-emerald-100/90 md:flex lg:gap-5 lg:text-xs">
            <span>Free delivery above ₹499</span>
            <span>•</span>
            <span>100% Quality Guaranteed</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header
        className="
          w-full
          border-b border-slate-200
          bg-white/95
          shadow-sm
          backdrop-blur-xl
          transition-colors duration-300
          dark:border-slate-800
          dark:bg-slate-950/95
        "
      >
        <div className="mx-auto w-full max-w-[1500px] px-3 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-2 sm:min-h-20 sm:gap-4 lg:gap-5">
            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMobile}
              className="group flex min-w-0 shrink-0 items-center gap-2 text-left"
            >
              <div
                className="
                  grid h-9 w-9 shrink-0 place-items-center
                  rounded-xl
                  bg-gradient-to-tr
                  from-emerald-700
                  via-emerald-600
                  to-green-500
                  text-lg font-black text-white
                  shadow-md shadow-emerald-600/30
                  transition duration-300
                  group-hover:rotate-6
                  sm:h-11 sm:w-11 sm:rounded-2xl
                  sm:text-xl
                  lg:h-12 lg:w-12
                "
              >
                D
              </div>

              <div className="min-w-0">
                <div className="truncate text-base font-black tracking-tight text-slate-900 dark:text-white sm:text-xl">
                  Dina<span className="text-emerald-600">Mart</span>
                </div>

                <div className="hidden text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400 sm:block">
                  Fresh & Express
                </div>
              </div>
            </Link>

            {/* DELIVERY LOCATION */}
            <div
              className="
                hidden shrink-0 items-center gap-2.5
                rounded-2xl
                border border-slate-200
                bg-slate-50
                px-3.5 py-2
                text-left
                transition
                dark:border-slate-700
                dark:bg-slate-900
                xl:flex
              "
            >
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                <MapPin size={16} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  Deliver to
                </p>

                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                    Bengaluru, 560001
                  </span>

                  <ChevronDown size={12} className="text-slate-500" />
                </div>
              </div>
            </div>

            {/* DESKTOP SEARCH */}
            <form
              onSubmit={handleSearch}
              className="hidden min-w-0 max-w-xl flex-1 md:block"
            >
              <div
                className="
                  group flex h-11 min-w-0
                  items-center
                  overflow-hidden
                  rounded-2xl
                  border border-slate-200
                  bg-slate-50/70
                  transition
                  focus-within:border-emerald-500
                  focus-within:bg-white
                  focus-within:shadow-md
                  focus-within:shadow-emerald-500/10
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:focus-within:bg-slate-800
                "
              >
                <Search
                  size={18}
                  className="
                    ml-3 shrink-0
                    text-slate-400
                    transition
                    group-focus-within:text-emerald-600
                    sm:ml-4
                  "
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search fresh produce, dairy, snacks..."
                  className="
                    h-full min-w-0 flex-1
                    bg-transparent
                    px-2.5
                    text-xs font-semibold
                    text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    dark:text-white
                    dark:placeholder:text-slate-500
                    sm:px-3
                  "
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="
                      mr-1 rounded-lg p-1.5
                      text-slate-400
                      transition
                      hover:bg-slate-200
                      dark:hover:bg-slate-700
                    "
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}

                <button
                  type="submit"
                  className="
                    mr-1 shrink-0
                    rounded-xl
                    bg-emerald-600
                    px-3 py-2
                    text-[10px] font-bold text-white
                    shadow-sm
                    transition
                    hover:bg-emerald-700
                    sm:px-4 sm:text-xs
                  "
                >
                  Search
                </button>
              </div>
            </form>

            {/* ACTIONS */}
            <div className="flex shrink-0 items-center gap-1 sm:gap-2">
              {/* ACCOUNT */}
              <Link
                to="/account"
                className="
                  group hidden
                  items-center gap-2
                  rounded-2xl
                  p-2.5
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  dark:text-slate-200
                  dark:hover:bg-slate-800
                  sm:flex
                "
              >
                <UserRound
                  size={20}
                  className="
                    text-slate-600
                    transition
                    group-hover:text-emerald-600
                    dark:text-slate-300
                  "
                />

                <div className="hidden text-left lg:block">
                  <p className="text-[10px] font-medium text-slate-400">Account</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Profile</p>
                </div>
              </Link>

              {/* DARK MODE BUTTON */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="
                  relative grid h-10 w-10 shrink-0
                  place-items-center
                  rounded-2xl
                  border border-slate-200
                  bg-slate-50
                  text-slate-700
                  transition-all
                  hover:border-emerald-300
                  hover:bg-emerald-50
                  hover:text-emerald-600
                  active:scale-95
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-200
                  dark:hover:border-emerald-500
                  dark:hover:bg-emerald-950
                  dark:hover:text-emerald-400
                "
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    >
                      <Sun size={19} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    >
                      <Moon size={19} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* WISHLIST */}
              <Link
                to="/wishlist"
                className="
                  relative grid h-10 w-10 shrink-0
                  place-items-center
                  rounded-2xl
                  text-slate-700
                  transition
                  hover:bg-rose-50
                  hover:text-rose-600
                  dark:text-slate-200
                  dark:hover:bg-rose-950
                  dark:hover:text-rose-400
                "
                aria-label="Wishlist"
              >
                <Heart size={19} />

                {wishlist.length > 0 && (
                  <motion.span
                    key={wishlist.length}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="
                      absolute right-0.5 top-0.5
                      grid h-4 min-w-4
                      place-items-center
                      rounded-full
                      bg-rose-500
                      px-1
                      text-[9px]
                      font-extrabold
                      text-white
                    "
                  >
                    {wishlist.length > 99 ? "99+" : wishlist.length}
                  </motion.span>
                )}
              </Link>

              {/* CART */}
              <Link
                to="/cart"
                className="
                  group relative flex h-10
                  shrink-0 items-center gap-1.5
                  rounded-2xl
                  bg-emerald-600
                  px-2.5
                  text-white
                  shadow-sm
                  shadow-emerald-600/20
                  transition
                  hover:bg-emerald-700
                  active:scale-95
                  sm:px-3.5
                "
                aria-label="Shopping cart"
              >
                <ShoppingCart
                  size={18}
                  className="transition group-hover:scale-110"
                />

                <span className="hidden text-xs font-bold sm:inline">Cart</span>

                <span
                  className="
                    grid h-5 min-w-5
                    place-items-center
                    rounded-full
                    bg-white/20
                    px-1
                    text-[10px]
                    font-extrabold
                    text-white
                  "
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              </Link>

              {/* MOBILE MENU */}
              <button
                type="button"
                onClick={() => setMobileOpen((value) => !value)}
                className="
                  grid h-10 w-10 shrink-0
                  place-items-center
                  rounded-2xl
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  dark:text-slate-200
                  dark:hover:bg-slate-800
                  lg:hidden
                "
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP CATEGORY NAVIGATION */}
        <div
          className="
            hidden
            border-t border-slate-100
            bg-white
            dark:border-slate-800
            dark:bg-slate-950
            lg:block
          "
        >
          <div className="mx-auto flex min-h-11 w-full max-w-[1500px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            {/* CATEGORIES DROPDOWN */}
            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setCategoryOpen((value) => !value)}
                className={`
                  flex items-center gap-2 py-2 text-xs font-extrabold transition
                  ${
                    categoryOpen
                      ? "text-emerald-600"
                      : "text-slate-800 hover:text-emerald-600 dark:text-slate-200"
                  }
                `}
              >
                <Compass size={16} className="text-emerald-600" />
                <span>Shop Categories</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    categoryOpen ? "rotate-180 text-emerald-600" : "text-slate-400"
                  }`}
                />
              </button>

              <AnimatePresence>
                {categoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    className="
                      absolute left-0 top-10
                      z-[100]
                      w-[min(640px,calc(100vw-32px))]
                      rounded-3xl
                      border border-slate-200
                      bg-white p-5
                      shadow-2xl
                      dark:border-slate-700
                      dark:bg-slate-900
                    "
                  >
                    <div className="mb-4 flex items-center justify-between gap-4 border-b border-slate-100 pb-3 dark:border-slate-800">
                      <div className="min-w-0">
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600">
                          Explore Catalog
                        </p>
                        <h3 className="truncate text-base font-black text-slate-900 dark:text-white">
                          Popular Grocery Categories
                        </h3>
                      </div>
                      <Package size={24} className="shrink-0 text-emerald-500" />
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {categories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={cat.path}
                          onClick={closeMobile}
                          className="
                            group flex min-w-0 items-center gap-3
                            rounded-2xl border border-slate-100
                            bg-slate-50/70 p-3 text-left transition
                            hover:border-emerald-200 hover:bg-emerald-50
                            dark:border-slate-800 dark:bg-slate-800/60
                            dark:hover:border-emerald-700 dark:hover:bg-emerald-950
                          "
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-xl shadow-sm transition group-hover:scale-110 dark:bg-slate-700">
                            {cat.emoji}
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-xs font-bold text-slate-800 group-hover:text-emerald-700 dark:text-slate-100 dark:group-hover:text-emerald-400">
                              {cat.name}
                            </p>
                            <p className="text-[10px] font-medium text-slate-400">
                              Explore →
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* QUICK LINKS */}
            <nav className="flex min-w-0 items-center gap-0.5">
              <NavItem
                label="Home"
                to="/"
                active={location.pathname === "/"}
              />
              <NavItem
                label="All Products"
                to="/products"
                active={location.pathname === "/products"}
              />
              <NavItem
                label="Today's Deals"
                to="/products?deal=true"
                active={location.search.includes("deal=true")}
                icon={<BadgePercent size={14} className="text-rose-500" />}
              />
              <NavItem
                label="Wishlist"
                to="/wishlist"
                active={location.pathname === "/wishlist"}
              />
              <NavItem
                label="My Account"
                to="/account"
                active={location.pathname === "/account"}
              />
            </nav>

            {/* EXPRESS DELIVERY */}
            <div className="hidden shrink-0 items-center gap-1.5 text-[11px] font-bold text-slate-500 xl:flex dark:text-slate-400">
              <Clock3 size={15} className="text-emerald-600" />
              <span>30-Min Express Delivery</span>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET MENU (FIXED POSITION & SCROLLABLE) */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="
                absolute top-full left-0 right-0
                max-h-[calc(100vh-80px)] overflow-y-auto
                border-t border-slate-100 bg-white shadow-xl
                dark:border-slate-800 dark:bg-slate-950
                lg:hidden
              "
            >
              <div className="mx-auto w-full max-w-[1500px] space-y-4 p-3 sm:p-5">
                {/* MOBILE SEARCH */}
                <form
                  onSubmit={handleSearch}
                  className="flex h-11 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900"
                >
                  <Search
                    size={18}
                    className="ml-3.5 shrink-0 self-center text-slate-400"
                  />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="min-w-0 flex-1 bg-transparent px-3 text-xs font-semibold text-slate-800 outline-none dark:text-white dark:placeholder:text-slate-500"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-emerald-600 px-3 text-xs font-bold text-white sm:px-5"
                  >
                    Search
                  </button>
                </form>

                {/* LINKS */}
                <div className="grid gap-1">
                  <MobileLink label="Home" to="/" onClick={closeMobile} />
                  <MobileLink label="All Products" to="/products" onClick={closeMobile} />
                  <MobileLink label="🔥 Today's Deals" to="/products?deal=true" onClick={closeMobile} />
                  <MobileLink
                    label={`♡ Wishlist${wishlist.length ? ` (${wishlist.length})` : ""}`}
                    to="/wishlist"
                    onClick={closeMobile}
                  />
                  <MobileLink
                    label={`🛒 Cart (${cartCount})`}
                    to="/cart"
                    onClick={closeMobile}
                  />
                  <MobileLink label="My Account" to="/account" onClick={closeMobile} />
                </div>

                {/* MOBILE CATEGORIES */}
                <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Categories
                  </p>

                  <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        to={cat.path}
                        onClick={closeMobile}
                        className="
                          flex min-w-0 items-center gap-2
                          rounded-xl bg-slate-50 p-2.5
                          text-left text-xs font-bold text-slate-700
                          transition hover:bg-emerald-50 hover:text-emerald-700
                          dark:bg-slate-900 dark:text-slate-200
                          dark:hover:bg-emerald-950 dark:hover:text-emerald-400
                        "
                      >
                        <span className="shrink-0">{cat.emoji}</span>
                        <span className="truncate">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-3.5 dark:bg-emerald-950/50">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white">
                    <MapPin size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">
                      Delivering to
                    </p>
                    <p className="truncate text-xs font-black text-slate-800 dark:text-white">
                      Bengaluru, 560001
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

function NavItem({ label, active, icon, to }) {
  return (
    <Link
      to={to}
      className={`
        relative flex h-11 items-center gap-1.5 whitespace-nowrap px-2.5 text-xs font-bold transition xl:px-3.5
        ${
          active
            ? "text-emerald-600"
            : "text-slate-600 hover:text-emerald-600 dark:text-slate-300"
        }
      `}
    >
      {icon}
      <span>{label}</span>

      {active && (
        <motion.span
          layoutId="navbar-active"
          className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-emerald-600 xl:left-3.5 xl:right-3.5"
        />
      )}
    </Link>
  );
}

function MobileLink({ label, to, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        rounded-xl px-3.5 py-2.5 text-left text-xs font-bold text-slate-700 transition
        hover:bg-emerald-50 hover:text-emerald-700
        dark:text-slate-200 dark:hover:bg-emerald-950 dark:hover:text-emerald-400
      "
    >
      {label}
    </Link>
  );
}