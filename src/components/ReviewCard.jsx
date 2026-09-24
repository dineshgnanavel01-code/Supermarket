import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewCard({
  name,
  review,
  rating = 5,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold">{name}</h3>

          <div className="mt-1 flex">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                size={15}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        <div className="text-3xl">💬</div>
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        "{review}"
      </p>
    </motion.div>
  );
}