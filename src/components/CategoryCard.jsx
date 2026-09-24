import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({
  category,
  onClick,
}) {
  return (
    <motion.button
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
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: -4,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      style={{
        transformPerspective: 900,
      }}
      onClick={onClick}
      className={`
        group relative overflow-hidden
        rounded-3xl bg-gradient-to-br
        ${category.color}
        p-6 text-left
        shadow-sm transition-shadow
        hover:shadow-2xl
        dark:from-slate-800
        dark:to-slate-900
      `}
    >
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="text-5xl"
      >
        {category.icon}
      </motion.div>

      <h3 className="
        mt-5 text-lg font-black
        text-slate-900
        dark:text-white
      ">
        {category.name}
      </h3>

      <span className="
        mt-2 inline-flex
        items-center gap-1
        text-sm font-semibold
        text-slate-600
        dark:text-slate-300
      ">
        Shop now
        <ArrowRight
          size={15}
          className="
            transition-transform
            group-hover:translate-x-1
          "
        />
      </span>
    </motion.button>
  );
}