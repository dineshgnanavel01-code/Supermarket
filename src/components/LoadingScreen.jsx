
import { motion } from "framer-motion";
import {
  Leaf,
  ShoppingBag,
  Sparkles,
  Sprout,
} from "lucide-react";

const floatingLeaves = [
  {
    left: "10%",
    top: "20%",
    rotate: -25,
    delay: 0,
  },
  {
    left: "18%",
    top: "72%",
    rotate: 35,
    delay: 0.8,
  },
  {
    left: "82%",
    top: "18%",
    rotate: 25,
    delay: 1.2,
  },
  {
    left: "88%",
    top: "70%",
    rotate: -35,
    delay: 0.4,
  },
];

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#071f14]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <motion.div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-500/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.25, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= FLOATING LEAVES ================= */}

      {floatingLeaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute text-green-300/30"
          style={{
            left: leaf.left,
            top: leaf.top,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: leaf.rotate,
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [0.8, 1.15, 0.8],
            y: [0, -25, 0],
            rotate: [
              leaf.rotate,
              leaf.rotate + 15,
              leaf.rotate,
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "easeInOut",
          }}
        >
          <Leaf size={45} />
        </motion.div>
      ))}

      {/* ================= CENTER CONTENT ================= */}

      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Rotating Outer Ring */}
        <motion.div
          className="absolute h-56 w-56 rounded-full border border-green-400/20"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Rotating Dashed Ring */}
        <motion.div
          className="absolute h-44 w-44 rounded-full border border-dashed border-green-300/30"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Logo Container */}
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
            rotate: -20,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
            type: "spring",
            stiffness: 160,
          }}
          className="relative flex h-32 w-32 items-center justify-center rounded-[38px] border border-white/20 bg-white/10 shadow-[0_0_80px_rgba(74,222,128,0.25)] backdrop-blur-xl"
        >
          {/* Logo Glow */}
          <motion.div
            className="absolute inset-3 rounded-[30px] bg-green-400/10"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Leaf */}
          <motion.div
            animate={{
              rotate: [-8, 8, -8],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <Leaf
              size={64}
              strokeWidth={1.5}
              className="text-green-300"
            />
          </motion.div>

          {/* Shopping Badge */}
          <motion.div
            className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-700 shadow-xl"
            animate={{
              y: [0, -7, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ShoppingBag size={21} />
          </motion.div>

          {/* Sparkle */}
          <motion.div
            className="absolute -bottom-2 -left-2"
            animate={{
              scale: [0.7, 1.2, 0.7],
              rotate: [0, 90, 180],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Sparkles
              size={25}
              className="text-yellow-300"
            />
          </motion.div>
        </motion.div>

        {/* ================= BRAND ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
        >
          <h1 className="mt-10 text-5xl font-black tracking-tight text-white md:text-6xl">
            Dina
            <span className="text-green-400">
              Mart
            </span>
          </h1>

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 90,
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="mx-auto mt-3 h-1 rounded-full bg-green-400"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.6,
          }}
          className="mt-5 text-sm font-medium tracking-wide text-green-100 md:text-base"
        >
          Grow your world with nature
          <span className="ml-2">🌱</span>
        </motion.p>

        {/* ================= LOADING STATUS ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
          }}
          className="mt-10 flex items-center gap-2"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sprout
              size={17}
              className="text-green-400"
            />
          </motion.div>

          <span className="text-xs font-medium tracking-widest text-green-200">
            GROWING YOUR EXPERIENCE
          </span>
        </motion.div>

        {/* ================= PROGRESS BAR ================= */}

        <div className="mt-5 h-1.5 w-64 overflow-hidden rounded-full bg-white/10 md:w-80">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-green-400"
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 2.6,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Animated Dots */}
        <div className="mt-4 flex gap-1.5">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              className="h-1.5 w-1.5 rounded-full bg-green-300"
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: item * 0.2,
              }}
            />
          ))}
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
          }}
          className="mt-7 text-[11px] text-green-300/60"
        >
          Plants • Nature • Happiness
        </motion.p>
      </div>
    </motion.div>
  );
}
