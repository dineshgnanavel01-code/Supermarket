import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingBasket,
  Sparkles,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function HeroBanner({ go }) {
  return (
    <section className="
      relative overflow-hidden
      bg-gradient-to-br
      from-green-50 via-white to-emerald-100
      px-4 py-16
      dark:from-slate-950
      dark:via-slate-900
      dark:to-green-950
    ">
      {/* Background blobs */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute -right-20 -top-20
          h-72 w-72 rounded-full
          bg-green-300/30 blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute -bottom-20 -left-20
          h-80 w-80 rounded-full
          bg-emerald-400/20 blur-3xl
        "
      />

      <div className="
        relative mx-auto grid max-w-7xl
        items-center gap-12
        lg:grid-cols-2
      ">
        {/* Text */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
            className="
              mb-6 inline-flex items-center
              gap-2 rounded-full
              border border-green-200
              bg-white/80 px-4 py-2
              text-sm font-bold text-green-700
              backdrop-blur
              dark:border-green-900
              dark:bg-slate-900/70
              dark:text-green-400
            "
          >
            <Sparkles size={16} />
            Fresh groceries delivered fast
          </motion.div>

          <h1 className="
            text-5xl font-black
            tracking-tight
            text-slate-900
            sm:text-6xl
            lg:text-7xl
            dark:text-white
          ">
            Fresh Food.
            <br />

            <span className="text-green-600">
              Better Living.
            </span>
          </h1>

          <p className="
            mt-6 max-w-xl
            text-lg leading-8
            text-slate-600
            dark:text-slate-300
          ">
            Shop fresh vegetables, fruits, groceries,
            dairy products and everyday essentials
            from Dina-Mart.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                x: 4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => go?.("/products")}
              className="
                rounded-2xl bg-green-600
                px-7 py-4 font-bold text-white
                shadow-xl shadow-green-600/25
              "
            >
              Shop Now
              <ArrowRight
                size={18}
                className="ml-2 inline"
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              onClick={() => go?.("/products")}
              className="
                rounded-2xl border
                border-slate-300
                bg-white/80 px-7 py-4
                font-bold
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
            >
              Explore Products
            </motion.button>
          </div>

          <div className="
            mt-10 grid max-w-lg
            grid-cols-3 gap-4
          ">
            <Feature
              icon={ShoppingBasket}
              text="10K+ Products"
            />

            <Feature
              icon={Truck}
              text="Fast Delivery"
            />

            <Feature
              icon={ShieldCheck}
              text="Secure Payment"
            />
          </div>
        </motion.div>

        {/* 3D Product Visual */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotateY: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
          }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          style={{
            perspective: 1200,
          }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative mx-auto
              max-w-xl
              rounded-[3rem]
              border border-white/60
              bg-white/50
              p-6
              shadow-2xl
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-white/5
            "
          >
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85"
              alt="Fresh groceries"
              className="
                h-[420px] w-full
                rounded-[2.5rem]
                object-cover
              "
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute -bottom-6 -left-6
                rounded-2xl bg-white
                p-5 shadow-2xl
                dark:bg-slate-800
              "
            >
              <p className="
                text-xs font-semibold
                text-slate-500
              ">
                Today's Offer
              </p>

              <p className="
                text-2xl font-black
                text-green-600
              ">
                30% OFF
              </p>
            </motion.div>

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute -right-10
                -top-10 h-28 w-28
                rounded-full
                border border-dashed
                border-green-500/50
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, text }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="flex items-center gap-2"
    >
      <Icon
        size={19}
        className="text-green-600"
      />

      <span className="
        text-xs font-semibold
        text-slate-600
        dark:text-slate-300
      ">
        {text}
      </span>
    </motion.div>
  );
}