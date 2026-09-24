
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShoppingBag,
  Home,
  PackageCheck,
  Truck,
  Clock3,
} from "lucide-react";

export default function OrderSuccess() {
  const location = useLocation();

  const orderId =
    location.state?.orderId ||
    `DINA-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Success Card */}
        <motion.section
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-900/10"
        >
          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-green-700 px-6 py-12 text-center text-white sm:px-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 180,
              }}
              className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-white shadow-2xl"
            >
              <CheckCircle2
                size={58}
                strokeWidth={2.5}
                className="text-emerald-600"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 text-3xl font-black sm:text-4xl"
            >
              Order Confirmed!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mx-auto mt-3 max-w-xl text-sm leading-6 text-emerald-50 sm:text-base"
            >
              Thank you for shopping with DinaMart. Your fresh groceries are
              being prepared and will be delivered to you soon.
            </motion.p>

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-white/10" />
          </div>

          {/* Order Information */}
          <div className="p-6 sm:p-10">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Order Number
              </p>

              <p className="mt-2 text-2xl font-black tracking-wide text-slate-900">
                {orderId}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Keep this number for future reference.
              </p>
            </div>

            {/* Delivery Steps */}
            <div className="mt-8">
              <h2 className="text-xl font-black text-slate-900">
                What happens next?
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <Step
                  icon={<PackageCheck size={24} />}
                  number="01"
                  title="Order Packed"
                  text="Our team will carefully pack your groceries."
                />

                <Step
                  icon={<Truck size={24} />}
                  number="02"
                  title="Out for Delivery"
                  text="Your order will be handed to our delivery partner."
                />

                <Step
                  icon={<Clock3 size={24} />}
                  number="03"
                  title="Delivered"
                  text="Fresh groceries will arrive at your doorstep."
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                <ShoppingBag
                  size={20}
                  className="transition-transform group-hover:scale-110"
                />
                Continue Shopping
              </Link>

              <Link
                to="/"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <Home size={20} />
                Back to Home
              </Link>
            </div>

            {/* Support */}
            <div className="mt-8 text-center text-sm text-slate-500">
              Need help with your order?{" "}
              <Link
                to="/account"
                className="font-bold text-emerald-600 hover:text-emerald-700"
              >
                Visit your account
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

function Step({ icon, number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-emerald-100 hover:bg-emerald-50"
    >
      <div className="flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
          {icon}
        </div>

        <span className="text-xs font-black text-slate-300">
          {number}
        </span>
      </div>

      <h3 className="mt-4 font-black text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </motion.div>
  );
}
