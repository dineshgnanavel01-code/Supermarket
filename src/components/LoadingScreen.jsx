import { motion } from "framer-motion";
import { ShoppingBasket, Sparkles, Leaf, ShieldCheck } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-950 via-slate-950 to-emerald-900 text-white overflow-hidden select-none"
    >
      {/* AMBIENT GLOW BACKDROPS */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-lime-500/10 blur-[120px] pointer-events-none" />

      {/* FLOATING SPARKLES ANIMATION */}
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 text-emerald-400/40"
      >
        <Sparkles size={24} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 text-lime-400/30"
      >
        <Sparkles size={28} />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-sm w-full">
        {/* LOGO CONTAINER WITH GLOW */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-emerald-500/30 blur-xl animate-pulse" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.95, 1.03, 1],
              opacity: 1,
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="relative grid h-24 w-24 place-items-center rounded-[30px] border border-emerald-400/30 bg-gradient-to-tr from-emerald-800 via-emerald-600 to-emerald-500 text-white shadow-2xl shadow-emerald-950/80 backdrop-blur-md"
          >
            <ShoppingBasket size={44} strokeWidth={2.2} className="drop-shadow-md" />
          </motion.div>
        </div>

        {/* BRAND TITLE & LEAF ACCENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <h1 className="text-3xl font-black tracking-tight text-white">
            Dina<span className="text-emerald-400">Mart</span>
          </h1>

          <motion.div
            animate={{
              rotate: [0, 15, -10, 0],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Leaf size={22} className="text-lime-400 fill-lime-400" />
          </motion.div>
        </motion.div>

        {/* TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-2 text-xs font-semibold uppercase tracking-widest text-emerald-200/70"
        >
          Fresh • Fast • Affordable
        </motion.p>

        {/* GLOWING PROGRESS BAR */}
        <div className="relative mt-8 h-2 w-full max-w-[220px] overflow-hidden rounded-full bg-emerald-950/80 border border-emerald-800/40 shadow-inner">
          <motion.div
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            initial={{ x: "-100%" }}
            animate={{ x: "250%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* STATUS MESSAGE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-300/80"
        >
          <ShieldCheck size={14} className="text-lime-400" />
          <span>Setting up fresh store items...</span>
        </motion.p>
      </div>
    </motion.div>
  );
}