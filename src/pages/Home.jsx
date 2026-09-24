import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Flame,
  Gift,
  Leaf,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  Zap,
} from "lucide-react";

import HeroBanner from "../components/HeroBanner";
import CategoryCard from "../components/CategoryCard";
import ProductGrid from "../components/ProductGrid";
import ReviewCard from "../components/ReviewCard";

import { categories, products } from "../data/products";

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
    },
  }),
};

export default function Home() {
  const bestSelling = [...products]
    .sort((a, b) => (b.reviews || 0) - (a.reviews || 0))
    .slice(0, 8);

  const deals = products.slice(0, 4);

  const freshProducts = products.filter(
    (product) =>
      product.category === "Outdoor Plants" ||
      product.category === "Flowering Plants"
  );

  const groceryEssentials = products.filter(
    (product) =>
      product.category === "Indoor Plants" ||
      product.category === "Medicinal Plants"
  );

  const recommendedProducts = products.slice(8, 16);

  return (
    <main className="overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <HeroBanner />

      {/* =========================================================
          TRUST / BENEFITS BAR
      ========================================================= */}
      <section className="border-y border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          {[
            {
              icon: Truck,
              title: "Fast Delivery",
              text: "Quick & reliable",
            },
            {
              icon: Leaf,
              title: "Fresh Products",
              text: "Quality guaranteed",
            },
            {
              icon: ShoppingBag,
              title: "Secure Shopping",
              text: "100% protected",
            },
            {
              icon: Gift,
              title: "Best Offers",
              text: "Save more daily",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 border-r border-gray-100 px-5 py-6 last:border-r-0 dark:border-gray-800"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20">

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-indigo-600" />

              <p className="font-bold tracking-wider text-indigo-600">
                SHOP BY CATEGORY
              </p>
            </div>

            <h2 className="mt-2 text-4xl font-black md:text-5xl">
              Explore Categories
            </h2>

            <p className="mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
              Find everything you need from everyday essentials to fresh
              products and more.
            </p>
          </div>

          <a
            href="/categories"
            className="group flex w-fit items-center gap-2 font-bold text-indigo-600"
          >
            View All
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.25 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          TODAY'S DEALS
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-20 text-white">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5">

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <Flame size={20} className="text-yellow-300" />

                <p className="font-bold tracking-wider text-yellow-200">
                  LIMITED TIME OFFER
                </p>
              </div>

              <h2 className="mt-2 text-4xl font-black md:text-5xl">
                Today's Deals
              </h2>

              <p className="mt-3 max-w-xl text-indigo-100">
                Grab your favorite products before these amazing offers
                disappear.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md">
              <Clock3 size={22} className="text-yellow-300" />

              <div>
                <p className="text-xs text-indigo-100">
                  OFFER ENDS SOON
                </p>

                <p className="font-black tracking-widest">
                  08 : 24 : 36
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                }}
                className="overflow-hidden rounded-3xl bg-white text-gray-900 shadow-2xl dark:bg-gray-900 dark:text-white"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-110"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white">
                    SALE
                  </div>

                  <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-red-600 backdrop-blur">
                    -20%
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    {product.category}
                  </p>

                  <h3 className="mt-2 line-clamp-1 text-lg font-black">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-1 text-sm">
                    <Star
                      size={15}
                      fill="currentColor"
                      className="text-yellow-400"
                    />

                    <span className="font-bold">
                      {product.rating}
                    </span>

                    <span className="text-gray-400">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-black">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>

                      {product.oldPrice && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          ₹{product.oldPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    <a
                      href={`/products/${product.id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700"
                    >
                      <ShoppingBag size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PRODUCTS
      ========================================================= */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">

        <div className="mx-auto max-w-7xl px-5">

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="font-bold tracking-wider text-indigo-600">
                HANDPICKED FOR YOU
              </p>

              <h2 className="mt-2 text-4xl font-black md:text-5xl">
                Featured Products
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Discover some of our most popular products.
              </p>
            </div>

            <a
              href="/products"
              className="w-fit rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700"
            >
              View All Products →
            </a>
          </motion.div>

          <ProductGrid products={products.slice(0, 8)} />
        </div>
      </section>

      {/* =========================================================
          PROMOTIONAL BANNERS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="grid gap-6 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.015 }}
            className="relative min-h-[280px] overflow-hidden rounded-[32px] bg-gradient-to-br from-orange-500 to-red-500 p-8 text-white"
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />

            <div className="relative z-10 max-w-sm">
              <p className="font-bold tracking-wider text-orange-100">
                SPECIAL OFFER
              </p>

              <h3 className="mt-3 text-3xl font-black md:text-4xl">
                Fresh Deals Every Day
              </h3>

              <p className="mt-3 text-orange-100">
                Save more on your everyday shopping with exclusive
                DinaMart offers.
              </p>

              <a
                href="/products"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-orange-600"
              >
                Shop Now
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="absolute bottom-5 right-7 text-8xl opacity-20">
              🛒
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.015 }}
            className="relative min-h-[280px] overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-500 to-green-700 p-8 text-white"
          >
            <div className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-white/10" />

            <div className="relative z-10 max-w-sm">
              <p className="font-bold tracking-wider text-green-100">
                NEW COLLECTION
              </p>

              <h3 className="mt-3 text-3xl font-black md:text-4xl">
                Fresh & Healthy Choices
              </h3>

              <p className="mt-3 text-green-100">
                Explore quality products selected specially for your
                everyday needs.
              </p>

              <a
                href="/products"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-green-700"
              >
                Explore Now
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="absolute bottom-2 right-6 text-8xl opacity-20">
              🥦
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          BEST SELLING
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20">

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2">
            <Flame size={19} className="text-red-500" />

            <p className="font-bold tracking-wider text-red-500">
              CUSTOMER FAVORITES
            </p>
          </div>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Best-Selling Products
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Products loved and purchased by our customers.
          </p>
        </motion.div>

        <ProductGrid products={bestSelling} />
      </section>

      {/* =========================================================
          FRESH VEGETABLES & FRUITS
      ========================================================= */}
      <section className="bg-green-50 py-20 dark:bg-green-950/20">

        <div className="mx-auto max-w-7xl px-5">

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <Leaf size={20} className="text-green-600" />

                <p className="font-bold tracking-wider text-green-600">
                  FARM FRESH
                </p>
              </div>

              <h2 className="mt-2 text-4xl font-black md:text-5xl">
                Fresh Vegetables & Fruits
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Freshness and quality delivered straight to your doorstep.
              </p>
            </div>

            <a
              href="/products"
              className="flex w-fit items-center gap-2 font-bold text-green-600"
            >
              Shop Fresh Products
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <ProductGrid
            products={
              freshProducts.length > 0
                ? freshProducts.slice(0, 8)
                : products.slice(0, 8)
            }
          />
        </div>
      </section>

      {/* =========================================================
          GROCERY ESSENTIALS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20">

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={19} className="text-indigo-600" />

            <p className="font-bold tracking-wider text-indigo-600">
              EVERYDAY NEEDS
            </p>
          </div>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Grocery Essentials
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Stock up on all your everyday essentials in one place.
          </p>
        </motion.div>

        <ProductGrid
          products={
            groceryEssentials.length > 0
              ? groceryEssentials.slice(0, 8)
              : products.slice(0, 8)
          }
        />
      </section>

      {/* =========================================================
          RECOMMENDED PRODUCTS
      ========================================================= */}
      <section className="bg-gray-50 py-20 dark:bg-gray-950">

        <div className="mx-auto max-w-7xl px-5">

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={19} className="text-purple-600" />

              <p className="font-bold tracking-wider text-purple-600">
                JUST FOR YOU
              </p>
            </div>

            <h2 className="mt-2 text-4xl font-black md:text-5xl">
              Recommended Products
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Discover more products you might love.
            </p>
          </motion.div>

          <ProductGrid
            products={
              recommendedProducts.length > 0
                ? recommendedProducts
                : products.slice(0, 8)
            }
          />
        </div>
      </section>

      {/* =========================================================
          CUSTOMER TESTIMONIALS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-20">

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-bold tracking-wider text-indigo-600">
            CUSTOMER LOVE
          </p>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
            Thousands of customers trust DinaMart for quality products
            and a smooth shopping experience.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            {
              name: "Rahul Kumar",
              review:
                "Amazing quality and super fast delivery! Everything arrived fresh and perfectly packed.",
              rating: 5,
            },
            {
              name: "Priya Sharma",
              review:
                "The products look exactly like the pictures. The shopping experience was smooth and simple.",
              rating: 5,
            },
            {
              name: "Arjun Singh",
              review:
                "Excellent shopping experience. Great prices and very convenient delivery. Will order again.",
              rating: 4,
            },
          ].map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}

        </div>
      </section>

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-5 mb-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-16 text-center text-white md:mx-auto md:max-w-7xl"
      >

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mb-5 text-5xl"
        >
          🛍️
        </motion.div>

        <h2 className="text-4xl font-black md:text-5xl">
          Get 10% Off Your First Order
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-indigo-100">
          Subscribe to our newsletter and receive exclusive offers,
          discounts, new product updates and more.
        </p>

        <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">

          <input
            type="email"
            placeholder="Enter your email address"
            className="min-w-0 flex-1 rounded-xl px-5 py-4 text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-white"
          />

          <button
            type="button"
            className="rounded-xl bg-gray-950 px-7 py-4 font-bold transition hover:bg-gray-800"
          >
            Subscribe
          </button>

        </div>

        <p className="mt-4 text-xs text-indigo-200">
          No spam. Unsubscribe anytime.
        </p>

      </motion.section>

    </main>
  );
}