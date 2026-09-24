import { AnimatePresence, motion } from "framer-motion";
import {
  ShoppingCart,
  X,
  Trash2,
} from "lucide-react";

import { useShop } from "../context/ShopContext";
import QuantitySelector from "./QuantitySelector";

export default function CartDrawer({
  open,
  onClose,
  onCheckout,
}) {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    grandTotal,
  } = useShop();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="
              fixed inset-0 z-[80]
              bg-black/50
              backdrop-blur-sm
            "
          />

          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              damping: 28,
            }}
            className="
              fixed right-0 top-0
              z-[90] flex h-full
              w-full max-w-md
              flex-col
              bg-white shadow-2xl
              dark:bg-slate-950
            "
          >
            <div className="
              flex items-center
              justify-between
              border-b p-5
              dark:border-slate-800
            ">
              <h2 className="
                flex items-center gap-2
                text-xl font-black
              ">
                <ShoppingCart
                  className="text-green-600"
                />
                Your Cart
              </h2>

              <button
                onClick={onClose}
                className="
                  rounded-xl p-2
                  hover:bg-slate-100
                  dark:hover:bg-slate-800
                "
              >
                <X />
              </button>
            </div>

            <div className="
              flex-1 overflow-y-auto p-5
            ">
              {!cart.length ? (
                <div className="
                  flex h-full
                  flex-col
                  items-center
                  justify-center
                  text-center
                ">
                  <div className="
                    text-6xl
                  ">
                    🛒
                  </div>

                  <h3 className="
                    mt-5 text-xl font-black
                  ">
                    Your cart is empty
                  </h3>

                  <p className="
                    mt-2 text-slate-500
                  ">
                    Add some fresh products!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      className="
                        flex gap-3
                        rounded-2xl
                        bg-slate-50 p-3
                        dark:bg-slate-900
                      "
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          h-20 w-20
                          rounded-xl
                          object-cover
                        "
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="
                          line-clamp-1
                          font-bold
                        ">
                          {item.name}
                        </h3>

                        <p className="
                          mt-1 font-black
                          text-green-600
                        ">
                          ₹{item.price}
                        </p>

                        <QuantitySelector
                          quantity={item.quantity}
                          onChange={(quantity) =>
                            updateQuantity(
                              item.id,
                              quantity
                            )
                          }
                        />
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="
                          self-start
                          text-slate-400
                          hover:text-red-500
                        "
                      >
                        <Trash2 size={17} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="
                border-t p-5
                dark:border-slate-800
              ">
                <div className="
                  mb-4 flex
                  justify-between
                  text-lg font-black
                ">
                  <span>Total</span>
                  <span>
                    ₹{grandTotal}
                  </span>
                </div>

                <button
                  onClick={onCheckout}
                  className="
                    w-full rounded-xl
                    bg-green-600
                    py-4 font-black
                    text-white
                  "
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}