import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ShopProvider } from "./context/ShopContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Deals from "./pages/Deals";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          exit={{
            opacity: 0,
            scale: 0.98,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <LoadingScreen />
        </motion.div>
      ) : (
        <motion.div
          key="website"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="min-h-screen"
        >
          <ShopProvider>
            <BrowserRouter>
              <Navbar />

              <Routes>
                {/* Home */}
                <Route
                  path="/"
                  element={<Home />}
                />

                {/* Products */}
                <Route
                  path="/products"
                  element={<Products />}
                />

                {/* Product Details */}
                <Route
                  path="/products/:id"
                  element={<ProductDetails />}
                />

                {/* Categories */}
                <Route
                  path="/categories"
                  element={<Categories />}
                />

                {/* Deals */}
                <Route
                  path="/deals"
                  element={<Deals />}
                />

                {/* About */}
                <Route
                  path="/about"
                  element={<About />}
                />

                {/* Cart */}
                <Route
                  path="/cart"
                  element={<Cart />}
                />

                {/* Account */}
                <Route
                  path="/account"
                  element={<Account />}
                />

                {/* 404 */}
                <Route
                  path="*"
                  element={
                    <div className="flex min-h-[60vh] items-center justify-center px-6">
                      <div className="text-center">
                        <h1 className="text-6xl font-black text-green-600">
                          404
                        </h1>

                        <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                          Page Not Found
                        </h2>

                        <p className="mt-2 text-slate-500">
                          The page you are looking for doesn't exist.
                        </p>
                      </div>
                    </div>
                  }
                />
              </Routes>

              <Footer />
            </BrowserRouter>
          </ShopProvider>
        </motion.div>
      )}
    </AnimatePresence>
  );
}