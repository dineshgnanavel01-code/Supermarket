import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  CreditCard,
  Truck,
  CheckCircle2,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
};

// Item list staggering variants
const listVariants = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 20, scale: 0.95, transition: { duration: 0.2 } },
};

export default function Cart() {
  const navigate = useNavigate();
  const { cart = [], removeFromCart, updateQuantity } = useShop();

  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderTrackId, setOrderTrackId] = useState(null);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const delivery = subtotal >= 499 || subtotal === 0 ? 0 : 40;
  const total = subtotal + delivery;

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate order placement and generation of Tracking ID
    setTimeout(() => {
      setIsProcessing(false);
      const randomTrackId = "TRK" + Math.floor(100000 + Math.random() * 900000);
      setOrderTrackId(randomTrackId);
    }, 1500);
  };

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-slate-50 px-6 py-16 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        {/* Hero entrance title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-semibold text-green-600">YOUR SHOPPING</p>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white">
            Shopping Cart
          </h1>
        </motion.div>

        {orderTrackId ? (
          /* Order Track Screen / Success State */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-3xl bg-white p-10 shadow-sm dark:bg-slate-900 text-center max-w-xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <CheckCircle2 className="mx-auto text-green-500 mb-4" size={64} />
            </motion.div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Order Placed Successfully!
            </h2>
            <p className="mt-2 text-slate-500">
              Thank you for shopping with us.
            </p>

            {/* Tracking Status Box */}
            <div className="mt-6 rounded-2xl bg-slate-50 dark:bg-slate-800 p-5 text-left border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-500">
                  Tracking ID:
                </span>
                <span className="font-mono font-bold text-green-600">
                  {orderTrackId}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Truck className="text-green-600" size={24} />
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white">
                    Status: Preparing for Dispatch
                  </p>
                  <p className="text-xs text-slate-500">
                    Estimated Delivery: 2-4 Business Days
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/products")}
              className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-bold text-white w-full"
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        ) : cart.length === 0 ? (
          /* Empty State Animation */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-white p-16 text-center shadow-sm dark:bg-slate-900"
          >
            <ShoppingCart className="mx-auto text-slate-400" size={60} />
            <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
              Your cart is empty
            </h2>
            <p className="mt-2 text-slate-500">
              Add some products to get started.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/products")}
              className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-bold text-white"
            >
              Start Shopping
            </motion.button>
          </motion.div>
        ) : (
          /* Cart List & Order Summary Grid */
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* Cart Items Animated List */}
            <motion.div
              variants={listVariants}
              initial="initial"
              animate="animate"
              className="space-y-4"
            >
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    layout
                    variants={itemVariants}
                    key={item.id}
                    exit="exit"
                    whileHover={{ y: -3 }}
                    className="flex gap-5 rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-900 transition-shadow hover:shadow-md"
                  >
                    {/* Hover Image Zoom */}
                    <div className="overflow-hidden rounded-2xl h-28 w-28">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <h2 className="font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h2>
                      <p className="mt-1 font-bold text-green-600">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>

                      <div className="mt-auto flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="rounded-lg border p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <Minus size={15} />
                        </motion.button>

                        <motion.span key={item.quantity} layout className="font-bold">
                          {item.quantity}
                        </motion.span>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="rounded-lg border p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <Plus size={15} />
                        </motion.button>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => removeFromCart(item.id)}
                      className="self-start rounded-xl p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Sidebar Summary & Payment Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="h-fit rounded-3xl bg-white p-7 shadow-sm dark:bg-slate-900"
            >
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Delivery</span>
                  <span>
                    {delivery === 0 ? "FREE" : `₹${delivery}`}
                  </span>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                  <div className="flex justify-between text-xl font-black text-slate-900 dark:text-white">
                    <span>Total</span>
                    <span>₹{total.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="mt-6 border-t border-slate-200 dark:border-slate-800 pt-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">
                  Payment Method
                </h3>
                <div className="space-y-2">
                  {[
                    { id: "upi", label: "UPI / Google Pay", icon: Wallet },
                    { id: "card", label: "Credit / Debit Card", icon: CreditCard },
                    { id: "cod", label: "Cash on Delivery", icon: ShieldCheck },
                  ].map((method) => {
                    const Icon = method.icon;
                    const isSelected = paymentMethod === method.id;
                    return (
                      <motion.div
                        key={method.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? "border-green-600 bg-green-50/50 dark:bg-green-950/20 text-green-600"
                            : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} />
                          <span className="text-sm font-semibold">{method.label}</span>
                        </div>
                        <input
                          type="radio"
                          name="payment"
                          checked={isSelected}
                          onChange={() => setPaymentMethod(method.id)}
                          className="accent-green-600"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Checkout Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                disabled={isProcessing}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-bold text-white shadow-lg shadow-green-600/20 hover:bg-green-700 disabled:opacity-50"
              >
                {isProcessing ? "Processing..." : "Checkout"}
                {!isProcessing && <ArrowRight size={18} />}
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
    </motion.main>
  );
}