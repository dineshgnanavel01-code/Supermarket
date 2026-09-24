import { motion } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Leaf,
  Truck,
  ShieldCheck,
  Sparkles,
  Star,
  ShoppingBasket,
  Zap,
  ChevronRight,
  BadgePercent,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
const cats = [
  ['🥬', 'Fresh Produce', 'Fresh Produce'],
  ['🍎', 'Fruits', 'Fruits'],
  ['🛒', 'Grocery Essentials', 'Grocery Essentials'],
  ['🥛', 'Dairy & Bakery', 'Dairy & Bakery'],
  ['🍪', 'Snacks & Beverages', 'Snacks & Beverages'],
  ['🧼', 'Home Care', 'Home Care'],
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function SectionTitle({
  eyebrow,
  title,
  action = 'View all',
  href = '/products',
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-xs font-black uppercase tracking-[.22em] text-emerald-600">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
      <Link
        to={href}
        className="hidden shrink-0 items-center gap-1 text-xs font-bold text-emerald-700 transition hover:text-emerald-800 sm:flex"
      >
        <span>{action}</span>
        <ChevronRight size={16} />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062e20] via-[#0b5b3b] to-[#127249] text-white">
        {/* Glow Effects */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 py-16 lg:py-20 grid min-h-[580px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          {/* Left Hero Text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fade}
            className="relative z-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-lime-300 backdrop-blur-md">
              <Sparkles size={14} className="text-lime-300" /> Fresh • Fast •
              Affordable
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Your everyday groceries,{' '}
              <span className="text-lime-300">made easier.</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-emerald-100/90">
              Farm-fresh produce, pantry staples, and household essentials —
              delivered directly to your doorstep with guaranteed value.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="group flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-xs font-bold text-emerald-900 shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                <span>Shop Groceries</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/products?sort=deal"
                className="rounded-2xl border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-bold backdrop-blur-md transition hover:bg-white/20"
              >
                Today's Deals
              </Link>
            </div>

            {/* Stats Metrics */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
              <div>
                <p className="text-2xl font-black text-white">10K+</p>
                <p className="text-xs text-emerald-100/80">Happy Shoppers</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">500+</p>
                <p className="text-xs text-emerald-100/80">Daily Essentials</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">30 min</p>
                <p className="text-xs text-emerald-100/80">Express Delivery</p>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <img
                className="h-[360px] w-full rounded-[28px] object-cover sm:h-[420px]"
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
                alt="Fresh supermarket produce"
              />
            </div>

            {/* Floating Offer Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 left-4 rounded-2xl bg-white p-3.5 text-slate-900 shadow-xl sm:left-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Zap size={22} fill="currentColor" />
                </div>
                <div>
                  <b className="text-base font-black leading-tight text-slate-900">
                    25% OFF TODAY
                  </b>
                  <p className="text-[11px] font-medium text-slate-500">
                    On all organic fruits & veggies
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Rating Pill */}
            <div className="absolute -right-2 top-8 hidden rounded-2xl bg-white/95 p-3.5 text-slate-900 shadow-xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="mt-1 block text-xs font-bold text-slate-800">
                Loved by 10,000+ Families
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="container mx-auto px-4 py-14">
        <SectionTitle eyebrow="Shop Smarter" title="Browse by Category" />

        <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {cats.map(([emoji, label, catName], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/products?category=${encodeURIComponent(catName)}`}
                className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-50 text-2xl transition duration-300 group-hover:scale-110">
                  {emoji}
                </div>
                <p className="mt-3 text-xs font-bold text-slate-800">
                  {label}
                </p>
                <span className="mt-1 text-[11px] font-semibold text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                  Explore →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flash Deals Section */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4">
          <SectionTitle
            eyebrow="Limited Time"
            title="Today's Flash Deals"
            action="See All Deals"
            href="/products?sort=deal"
          />

          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-800">
            <Clock size={14} className="text-amber-600" />
            <span>Ends tonight • Extra savings on selected supermarket picks</span>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(3, 7).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="container mx-auto px-4 py-14">
        <SectionTitle eyebrow="Top Picks" title="Best-Selling Groceries" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Fresh Produce Showcase Section */}
      <section className="bg-emerald-50/60 py-14">
        <div className="container mx-auto px-4">
          <SectionTitle
            eyebrow="Fresh Every Day"
            title="Fruits & Vegetables"
            href="/products?category=Fresh%20Produce"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products
              .filter(
                (p) => p.category === 'Fresh Produce' || p.category === 'Fruits'
              )
              .slice(0, 4)
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="container mx-auto px-4 py-14">
        <SectionTitle eyebrow="Why DinaMart" title="A Better Way to Shop" />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 sm:p-8 transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white">
              <Leaf size={24} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">Farm Fresh</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Directly sourced produce and pantry staples, checked daily for peak quality.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-100 bg-amber-50/40 p-6 sm:p-8 transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white">
              <Truck size={24} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">
              30-Min Delivery
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Select convenient time slots with express local delivery options.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50/40 p-6 sm:p-8 transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <ShieldCheck size={24} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Secure Checkout
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Transparent order totals, instant coupons, and multiple payment modes.
            </p>
          </div>
        </div>
      </section>

      {/* Highlight Promotional Banners */}
      <section className="container mx-auto px-4 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white shadow-lg">
            <span className="text-xs font-black uppercase tracking-widest text-amber-100">
              Weekend Special
            </span>
            <h3 className="mt-2 max-w-xs text-2xl font-black">
              Stock Up & Save on Family Favorites
            </h3>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-orange-700 transition hover:bg-orange-50"
            >
              <span>Explore Offers</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-emerald-900 p-8 text-white shadow-lg">
            <span className="text-xs font-black uppercase tracking-widest text-lime-300">
              Fresh Guarantee
            </span>
            <h3 className="mt-2 max-w-xs text-2xl font-black">
              100% Fresh Produce or Money Back
            </h3>
            <Link
              to="/products?category=Fresh%20Produce"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-2.5 text-xs font-bold text-emerald-950 transition hover:bg-lime-200"
            >
              <span>Shop Fresh</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="mx-auto text-lime-300" size={28} />
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            Loved by Everyday Shoppers
          </h2>
          <p className="mx-auto mt-2 max-w-md text-xs text-slate-400">
            A fast, simple weekly grocery store experience designed for your home.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                'Priya S.',
                'Fresh produce and a wonderfully simple online shopping experience.',
              ],
              [
                'Rahul K.',
                'The daily deals section saves me so much money on weekly staples.',
              ],
              [
                'Ananya M.',
                'Super fast delivery, accurate quantities, and clean UI.',
              ],
            ].map(([name, text]) => (
              <div
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xs"
                key={name}
              >
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  “{text}”
                </p>
                <p className="mt-4 text-xs font-bold text-lime-300">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-emerald-700 py-10 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <ShoppingBasket size={22} />
              <h2 className="text-xl font-bold">Get Fresh Deals in Your Inbox</h2>
            </div>
            <p className="mt-1 text-xs text-emerald-100">
              Weekly discounts, new item arrivals, and seasonal coupons.
            </p>
          </div>

          <div className="flex w-full max-w-md overflow-hidden rounded-2xl bg-white p-1.5 shadow-md">
            <input
              type="email"
              className="min-w-0 flex-1 bg-transparent px-3 text-xs font-medium text-slate-800 placeholder-slate-400 outline-none"
              placeholder="Enter your email address"
            />
            <button className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}