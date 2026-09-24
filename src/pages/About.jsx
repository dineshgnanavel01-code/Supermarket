import { motion } from "framer-motion";
import { Leaf, Heart, Truck, ShieldCheck } from "lucide-react";

export default function About() {
  const features = [
    [Leaf, "Fresh Products", "We focus on quality and freshness."],
    [Heart, "Customer First", "Your satisfaction is our priority."],
    [Truck, "Fast Delivery", "Reliable doorstep delivery."],
    [ShieldCheck, "Secure Shopping", "Safe and secure online shopping."],
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="font-bold text-green-600">ABOUT DINAMART</p>

            <h1 className="mt-3 text-5xl font-black text-slate-900 dark:text-white">
              Making Everyday Shopping
              <span className="block text-green-600">
                Simple & Fresh
              </span>
            </h1>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
              DinaMart is an online shopping platform designed to make
              everyday grocery shopping convenient, affordable and simple.
              We bring quality products directly to your doorstep.
            </p>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              From fresh fruits and vegetables to household essentials,
              our goal is to make shopping easier for every family.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src="https://images.unsplash.com/photo-1604719312566-8912e922f6a4?auto=format&fit=crop&w=1000&q=80"
            alt="DinaMart"
            className="h-[450px] w-full rounded-[3rem] object-cover shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-20 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([Icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 p-7 dark:border-slate-800"
            >
              <Icon className="text-green-600" size={32} />

              <h2 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                {title}
              </h2>

              <p className="mt-2 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["10K+", "Happy Customers"],
            ["500+", "Products"],
            ["50+", "Cities"],
            ["99%", "Customer Satisfaction"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl bg-green-600 p-7 text-center text-white"
            >
              <div className="text-3xl font-black">{number}</div>
              <div className="mt-2 text-sm text-green-100">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}