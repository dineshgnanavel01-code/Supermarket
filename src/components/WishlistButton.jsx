import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useShop } from "../context/ShopContext";

const WishlistButton = ({ product }) => {
  const { toggleWishlist, isWishlisted } = useShop();

  const active = isWishlisted(product.id);

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={() => toggleWishlist(product)}
      className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition ${
        active
          ? "border-red-200 bg-red-50 text-red-500"
          : "border-gray-200 bg-white text-gray-500 hover:border-red-200 hover:text-red-500"
      }`}
    >
      <Heart
        size={19}
        fill={active ? "currentColor" : "none"}
      />
    </motion.button>
  );
};

export default WishlistButton;