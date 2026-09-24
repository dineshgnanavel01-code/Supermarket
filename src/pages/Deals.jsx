import { motion } from "framer-motion";
import {
  Flame,
  ArrowRight,
  Sparkles,
  Clock3,
  ShoppingBag,
  Zap,
  Percent,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const deals = [
  {
    title: "Fresh Vegetables",
    subtitle: "Farm Fresh Collection",
    discount: "40% OFF",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=90",
    color: "from-green-500 to-emerald-700",
  },
  {
    title: "Fresh Fruits",
    subtitle: "Fresh & Naturally Sweet",
    discount: "35% OFF",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=90",
    color: "from-orange-400 to-red-600",
  },
{
  title: "Daily Essentials",
  subtitle: "Everything You Need",
  discount: "30% OFF",
  image:
    "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=1200&q=90",
  color: "from-blue-500 to-indigo-700",
},
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Deals() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">

        {/* Background blobs */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-300/30 blur-3xl dark:bg-green-500/10"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-500/10"
        />

        <div className="relative mx-auto max-w-7xl text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
            }}
            className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-bold text-orange-600 shadow-sm dark:border-orange-900/50 dark:bg-orange-950/30"
          >
            <motion.span
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <Flame size={18} />
            </motion.span>

            HOT DEALS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
            }}
            className="text-5xl font-black tracking-tight text-slate-900 md:text-7xl dark:text-white"
          >
            Today's
            <span className="block bg-gradient-to-r from-green-500 via-emerald-500 to-green-700 bg-clip-text text-transparent">
              Best Deals
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400"
          >
            Save more on fresh groceries, everyday essentials and
            quality products. Grab these limited-time offers before
            they're gone.
          </motion.p>

          {/* Countdown style banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mx-auto mt-8 flex w-fit flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <Clock3 className="text-green-600" size={20} />

            <span className="font-semibold text-slate-600 dark:text-slate-300">
              Deals ending soon
            </span>

            <div className="rounded-lg bg-green-600 px-3 py-1 font-black text-white">
              LIMITED TIME
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DEAL CARDS
      ====================================================== */}
      <section className="relative px-6 pb-24">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {deals.map((deal, index) => (
            <motion.article
              key={deal.title}
              variants={cardVariants}
              whileHover={{
                y: -15,
                rotateX: 5,
                rotateY: index === 1 ? 0 : index === 0 ? -3 : 3,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <motion.img
                  src={deal.image}
                  alt={deal.title}
                  className="h-full w-full object-cover"
                  whileHover={{
                    scale: 1.12,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Discount badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className={`absolute left-5 top-5 rounded-2xl bg-gradient-to-r ${deal.color} px-4 py-3 text-white shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <Percent size={18} />

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                        Save
                      </p>

                      <p className="text-xl font-black">
                        {deal.discount}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating flame */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-5 top-5 rounded-full bg-white/90 p-3 text-orange-500 shadow-lg backdrop-blur dark:bg-slate-900/90"
                >
                  <Flame size={20} />
                </motion.div>

                {/* Bottom image text */}
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-sm font-semibold text-white/80">
                    {deal.subtitle}
                  </p>

                  <h2 className="mt-1 text-3xl font-black">
                    {deal.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Zap
                    size={16}
                    className="text-yellow-500"
                  />

                  <span>Limited-time offer</span>
                </div>

                <div className="mt-5 flex items-center justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Special Price
                    </p>

                    <p className="mt-1 text-xl font-black text-green-600">
                      Best prices today
                    </p>
                  </div>

                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    className="rounded-2xl bg-green-50 p-3 text-green-600 dark:bg-green-900/20"
                  >
                    <ShoppingBag size={22} />
                  </motion.div>
                </div>

                <motion.button
                  onClick={goToProducts}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition-colors hover:bg-green-700"
                >
                  Shop This Deal

                  <motion.span
                    className="inline-flex"
                    whileHover={{
                      x: 5,
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </motion.button>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 ring-2 ring-green-500/30 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          BIG PROMOTION
      ====================================================== */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-600 via-emerald-600 to-green-800 px-8 py-14 text-white shadow-2xl md:px-14"
        >

          {/* Animated circles */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[50px] border-white/10"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2">

            <div>
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mb-5 inline-flex rounded-2xl bg-white/15 p-4 backdrop-blur"
              >
                <Sparkles size={30} />
              </motion.div>

              <h2 className="text-4xl font-black md:text-5xl">
                Fresh Deals.
                <br />
                Fresh Savings.
              </h2>

              <p className="mt-5 max-w-xl text-green-50/90">
                Discover amazing discounts across our collection
                and make every shopping trip more rewarding.
              </p>

              <motion.button
                onClick={goToProducts}
                whileHover={{
                  scale: 1.05,
                  x: 5,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-black text-green-700 shadow-xl"
              >
                Start Shopping
                <ArrowRight size={19} />
              </motion.button>
            </div>

            {/* 3D offer */}
            <div className="flex justify-center">
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateZ: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  rotateY: 15,
                  rotateX: -10,
                  scale: 1.05,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                className="relative flex h-64 w-64 items-center justify-center rounded-[3rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl"
              >
                <div className="absolute inset-5 rounded-[2rem] border border-white/20" />

                <div className="relative text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-100">
                    UP TO
                  </p>

                  <p className="mt-1 text-7xl font-black">
                    50%
                  </p>

                  <p className="text-xl font-black">
                    OFF
                  </p>

                  <div className="mt-3 flex justify-center">
                    <Flame size={28} />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* =====================================================
          TRUST SECTION
      ====================================================== */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["🚚", "Fast Delivery", "Quick doorstep delivery"],
            ["💚", "Fresh Quality", "Carefully selected products"],
            ["🔒", "Secure Payment", "Safe checkout experience"],
            ["🎁", "Great Offers", "Amazing deals every day"],
          ].map(([icon, title, text], index) => (
            <motion.div
              key={title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
                scale: 1.02,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="text-3xl">
                {icon}
              </div>

              <h3 className="mt-4 font-black text-slate-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}