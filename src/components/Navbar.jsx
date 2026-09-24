import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  ShoppingCart,
  Heart,
  UserRound,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Home,
  LayoutGrid,
  Flame,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useTheme } from "../context/ThemeContext";

const categories = [
  {
    name: "Fruits & Vegetables",
    emoji: "🥬",
    id: "fruits",
  },
  {
    name: "Dairy & Bakery",
    emoji: "🥛",
    id: "dairy",
  },
  {
    name: "Grocery Essentials",
    emoji: "🌾",
    id: "grocery",
  },
  {
    name: "Snacks & Beverages",
    emoji: "🍿",
    id: "snacks",
  },
  {
    name: "Home Care",
    emoji: "🧴",
    id: "home",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { cart = [], wishlist = [] } = useShop();
  const { darkMode, toggleDarkMode } = useTheme();

  const cartCount = cart.reduce(
    (total, item) => total + (Number(item?.qty) || 1),
    0
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
    setCategoriesOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim();

    if (!value) return;

    navigate(`/products?search=${encodeURIComponent(value)}`);
    setSearch("");
    setMenuOpen(false);
  };

  const handleCategory = (category) => {
    const element = document.getElementById("products");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setCategoriesOpen(false);
    setMenuOpen(false);

    console.log("Selected category:", category.id);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* TOP BAR */}
      <div className="hidden bg-slate-950 text-white sm:block">
        <div className="mx-auto flex h-8 max-w-full items-center justify-between px-5 text-[10px] font-semibold lg:px-8">
          <span>🌱 Fresh groceries, happier homes</span>

          <div className="flex items-center gap-5 text-slate-300">
            <span>Free delivery above ₹499</span>
            <span>•</span>
            <span>Support 24/7</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto max-w-full px-3 sm:px-5 lg:px-8">
          <div className="flex min-h-[72px] items-center gap-3">
            {/* LOGO */}
            <button
              onClick={() => scrollToSection("home")}
              className="group flex shrink-0 items-center gap-2.5"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -5,
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  relative grid h-11 w-11
                  place-items-center
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-br
                  from-emerald-500
                  to-green-700
                  shadow-lg
                  shadow-emerald-600/20
                  sm:h-12 sm:w-12
                "
              >
                <span className="relative z-10 text-xl font-black text-white">
                  D
                </span>

                <span className="absolute -bottom-3 -right-3 h-8 w-8 rounded-full bg-lime-300/40" />
              </motion.div>

              <div className="hidden sm:block text-left">
                <h1 className="text-xl font-black leading-none text-slate-900 dark:text-white">
                  Dina<span className="text-emerald-600">Mart</span>
                </h1>

                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Everyday Grocery
                </p>
              </div>
            </button>

            {/* LOCATION */}
            <button
              type="button"
              className="
                hidden shrink-0
                items-center gap-2
                border-l border-slate-200
                pl-4
                text-left
                lg:flex
                dark:border-slate-800
              "
            >
              <MapPin
                size={18}
                className="text-emerald-600"
              />

              <div>
                <p className="text-[9px] text-slate-400">
                  Delivering to
                </p>

                <div className="flex items-center gap-1">
                  <span className="text-xs font-black text-slate-800 dark:text-white">
                    Bengaluru
                  </span>

                  <ChevronDown
                    size={12}
                    className="text-slate-400"
                  />
                </div>
              </div>
            </button>

            {/* SEARCH */}
            <form
              onSubmit={handleSearch}
              className="ml-2 hidden min-w-0 flex-1 md:block lg:mx-5"
            >
              <div
                className="
                  flex h-11
                  overflow-hidden
                  rounded-xl
                  border border-slate-200
                  bg-slate-100
                  transition-all
                  focus-within:border-emerald-500
                  focus-within:bg-white
                  focus-within:ring-4
                  focus-within:ring-emerald-500/10
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:focus-within:bg-slate-800
                "
              >
                <div className="grid w-11 shrink-0 place-items-center">
                  <Search
                    size={18}
                    className="text-slate-400"
                  />
                </div>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products, brands and more..."
                  className="
                    min-w-0 flex-1
                    bg-transparent
                    px-1
                    text-xs font-semibold
                    text-slate-800
                    outline-none
                    placeholder:text-slate-400
                    dark:text-white
                  "
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="px-3 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  >
                    <X size={15} />
                  </button>
                )}

                <button
                  type="submit"
                  className="
                    m-1
                    rounded-lg
                    bg-emerald-600
                    px-5
                    text-[10px]
                    font-black
                    text-white
                    transition
                    hover:bg-emerald-700
                  "
                >
                  Search
                </button>
              </div>
            </form>

            {/* RIGHT ACTIONS */}
            <div className="ml-auto flex items-center gap-1">
              {/* ACCOUNT */}
              <button
                onClick={() => scrollToSection("account")}
                className="
                  hidden
                  items-center gap-2
                  rounded-xl
                  px-3 py-2
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  sm:flex
                  dark:text-slate-200
                  dark:hover:bg-slate-900
                "
              >
                <UserRound size={19} />

                <div className="hidden text-left lg:block">
                  <p className="text-[9px] text-slate-400">
                    Hello
                  </p>

                  <p className="text-[11px] font-black">
                    Account
                  </p>
                </div>
              </button>

              {/* THEME */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="
                  hidden h-10 w-10
                  place-items-center
                  rounded-xl
                  border border-slate-200
                  text-slate-600
                  transition
                  hover:border-emerald-400
                  hover:text-emerald-600
                  sm:grid
                  dark:border-slate-700
                  dark:text-slate-300
                "
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

              {/* WISHLIST */}
              <button
                onClick={() => scrollToSection("wishlist")}
                className="
                  relative grid h-10 w-10
                  place-items-center
                  rounded-xl
                  text-slate-700
                  transition
                  hover:bg-rose-50
                  hover:text-rose-500
                  dark:text-slate-200
                  dark:hover:bg-rose-950
                "
                aria-label="Wishlist"
              >
                <Heart size={19} />

                {wishlist.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="
                      absolute right-0 top-0
                      grid h-4 min-w-4
                      place-items-center
                      rounded-full
                      bg-rose-500
                      px-1
                      text-[8px]
                      font-black
                      text-white
                    "
                  >
                    {wishlist.length > 99
                      ? "99+"
                      : wishlist.length}
                  </motion.span>
                )}
              </button>

              {/* CART */}
              <button
                onClick={() => scrollToSection("cart")}
                className="
                  relative flex h-11
                  items-center gap-2
                  rounded-xl
                  bg-emerald-600
                  px-3
                  text-white
                  shadow-lg
                  shadow-emerald-600/20
                  transition
                  hover:bg-emerald-700
                  active:scale-95
                  sm:px-4
                "
                aria-label="Cart"
              >
                <ShoppingCart size={18} />

                <span className="hidden text-xs font-black sm:block">
                  Cart
                </span>

                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/20 px-1 text-[9px] font-black">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              </button>

              {/* MOBILE MENU */}
              <button
                type="button"
                onClick={() => setMenuOpen((value) => !value)}
                className="
                  grid h-10 w-10
                  place-items-center
                  rounded-xl
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  lg:hidden
                  dark:text-white
                  dark:hover:bg-slate-900
                "
              >
                {menuOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>
            </div>
          </div>

          {/* SINGLE PAGE NAV */}
          <nav
            className="
              hidden h-12
              items-center
              border-t border-slate-100
              lg:flex
              dark:border-slate-800
            "
          >
            <div className="flex items-center gap-1">
              <NavButton
                label="Home"
                icon={<Home size={14} />}
                onClick={() => scrollToSection("home")}
              />

              {/* CATEGORIES DROPDOWN */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setCategoriesOpen((value) => !value)
                  }
                  className={`
                    flex h-9 items-center gap-1.5
                    rounded-lg px-3
                    text-[11px] font-bold
                    transition
                    ${
                      categoriesOpen
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950"
                        : "text-slate-600 hover:bg-slate-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-900"
                    }
                  `}
                >
                  <LayoutGrid size={14} />
                  Categories
                  <ChevronDown
                    size={12}
                    className={`transition-transform ${
                      categoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {categoriesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        scale: 0.97,
                      }}
                      className="
                        absolute left-0 top-10
                        z-[100]
                        w-[520px]
                        rounded-2xl
                        border border-slate-200
                        bg-white
                        p-4
                        shadow-2xl
                        dark:border-slate-700
                        dark:bg-slate-900
                      "
                    >
                      <div className="mb-3">
                        <p className="text-[9px] font-black uppercase tracking-widest text-emerald-600">
                          Browse
                        </p>

                        <h3 className="text-base font-black text-slate-900 dark:text-white">
                          Shop by Category
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() =>
                              handleCategory(category)
                            }
                            className="
                              group flex items-center gap-3
                              rounded-xl
                              bg-slate-50
                              p-3
                              text-left
                              transition
                              hover:bg-emerald-50
                              dark:bg-slate-800
                              dark:hover:bg-emerald-950
                            "
                          >
                            <span className="text-xl transition group-hover:scale-125">
                              {category.emoji}
                            </span>

                            <span className="truncate text-[10px] font-bold text-slate-700 dark:text-slate-200">
                              {category.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavButton
                label="Products"
                icon={<LayoutGrid size={14} />}
                onClick={() => scrollToSection("products")}
              />

              <NavButton
                label="Today's Deals"
                icon={
                  <Flame
                    size={14}
                    className="text-orange-500"
                  />
                }
                onClick={() => scrollToSection("deals")}
              />

              <NavButton
                label="Wishlist"
                icon={<Heart size={14} />}
                onClick={() => scrollToSection("wishlist")}
              />

              <NavButton
                label="Cart"
                icon={<ShoppingCart size={14} />}
                onClick={() => scrollToSection("cart")}
              />

              <NavButton
                label="Account"
                icon={<UserRound size={14} />}
                onClick={() => scrollToSection("account")}
              />
            </div>

            <div className="ml-auto flex items-center gap-2 text-[10px] font-bold text-slate-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Express delivery available
            </div>
          </nav>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            className="
              border-b
              border-slate-200
              bg-white
              shadow-2xl
              lg:hidden
              dark:border-slate-800
              dark:bg-slate-950
            "
          >
            <div className="max-h-[calc(100vh-80px)] overflow-y-auto p-4">
              {/* MOBILE SEARCH */}
              <form
                onSubmit={handleSearch}
                className="mb-4"
              >
                <div className="flex h-11 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-900">
                  <Search
                    size={17}
                    className="ml-3 self-center text-slate-400"
                  />

                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search products..."
                    className="
                      min-w-0 flex-1
                      bg-transparent
                      px-3
                      text-xs font-semibold
                      outline-none
                      dark:text-white
                    "
                  />

                  <button
                    type="submit"
                    className="bg-emerald-600 px-4 text-[10px] font-black text-white"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* MOBILE NAV */}
              <div className="space-y-1">
                <MobileButton
                  label="Home"
                  icon={<Home size={17} />}
                  onClick={() =>
                    scrollToSection("home")
                  }
                />

                <MobileButton
                  label="Products"
                  icon={<LayoutGrid size={17} />}
                  onClick={() =>
                    scrollToSection("products")
                  }
                />

                <MobileButton
                  label="Today's Deals"
                  icon={<Flame size={17} />}
                  onClick={() =>
                    scrollToSection("deals")
                  }
                />

                <MobileButton
                  label={`Wishlist ${
                    wishlist.length
                      ? `(${wishlist.length})`
                      : ""
                  }`}
                  icon={<Heart size={17} />}
                  onClick={() =>
                    scrollToSection("wishlist")
                  }
                />

                <MobileButton
                  label={`Shopping Cart (${cartCount})`}
                  icon={<ShoppingCart size={17} />}
                  onClick={() =>
                    scrollToSection("cart")
                  }
                />

                <MobileButton
                  label="My Account"
                  icon={<UserRound size={17} />}
                  onClick={() =>
                    scrollToSection("account")
                  }
                />
              </div>

              {/* CATEGORIES */}
              <div className="mt-5 border-t border-slate-100 pt-5 dark:border-slate-800">
                <p className="mb-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Shop Categories
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() =>
                        handleCategory(category)
                      }
                      className="
                        flex items-center gap-2
                        rounded-xl
                        bg-slate-50
                        p-3
                        text-left
                        text-[10px]
                        font-bold
                        text-slate-700
                        transition
                        hover:bg-emerald-50
                        hover:text-emerald-700
                        dark:bg-slate-900
                        dark:text-slate-200
                      "
                    >
                      <span className="text-lg">
                        {category.emoji}
                      </span>

                      <span className="truncate">
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* LOCATION */}
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-3.5 dark:bg-emerald-950/50">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase text-emerald-600">
                    Delivering to
                  </p>

                  <p className="text-xs font-black text-slate-800 dark:text-white">
                    Bengaluru
                  </p>
                </div>
              </div>

              {/* DARK MODE */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className="
                  mt-3 flex w-full
                  items-center justify-between
                  rounded-xl
                  bg-slate-100
                  px-4 py-3
                  text-xs font-bold
                  text-slate-700
                  dark:bg-slate-900
                  dark:text-white
                "
              >
                <span className="flex items-center gap-2">
                  {darkMode ? (
                    <Sun size={17} />
                  ) : (
                    <Moon size={17} />
                  )}

                  {darkMode
                    ? "Light Mode"
                    : "Dark Mode"}
                </span>

                <span className="text-[9px] text-slate-400">
                  Change theme
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* DESKTOP BUTTON */
function NavButton({ label, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex h-9
        items-center gap-1.5
        rounded-lg
        px-3
        text-[11px]
        font-bold
        text-slate-600
        transition
        hover:bg-emerald-50
        hover:text-emerald-600
        dark:text-slate-300
        dark:hover:bg-slate-900
        dark:hover:text-emerald-400
      "
    >
      {icon}
      {label}
    </button>
  );
}

/* MOBILE BUTTON */
function MobileButton({ label, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex w-full
        items-center gap-3
        rounded-xl
        px-3.5 py-3
        text-left
        text-xs
        font-bold
        text-slate-700
        transition
        hover:bg-emerald-50
        hover:text-emerald-700
        dark:text-slate-200
        dark:hover:bg-emerald-950
        dark:hover:text-emerald-400
      "
    >
      <span className="text-emerald-600">
        {icon}
      </span>

      <span>{label}</span>
    </button>
  );
}