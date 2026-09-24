import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function QuantitySelector({
  quantity,
  onChange,
}) {
  return (
    <div className="
      inline-flex items-center
      rounded-xl border
      border-slate-200
      bg-white
      dark:border-slate-700
      dark:bg-slate-800
    ">
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() =>
          onChange(Math.max(1, quantity - 1))
        }
        className="
          flex h-10 w-10
          items-center justify-center
          text-slate-600
          hover:text-green-600
          dark:text-slate-300
        "
      >
        <Minus size={16} />
      </motion.button>

      <span className="
        min-w-10 text-center
        text-sm font-bold
      ">
        {quantity}
      </span>

      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() =>
          onChange(quantity + 1)
        }
        className="
          flex h-10 w-10
          items-center justify-center
          text-slate-600
          hover:text-green-600
          dark:text-slate-300
        "
      >
        <Plus size={16} />
      </motion.button>
    </div>
  );
}