import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600"
        >
          <CheckCircle size={55} />
        </motion.div>

        <h1 className="mt-7 text-4xl font-black">
          Order Successful!
        </h1>

        <p className="mt-4 text-gray-500">
          Thank you for shopping with Dina-Mart. Your order
          has been placed successfully.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-block rounded-xl bg-indigo-600 px-7 py-4 font-bold text-white"
        >
          Continue Shopping
        </Link>
      </motion.div>
    </main>
  );
}