import { useState } from "react";
import { Check, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { useShop } from "../context/ShopContext";

export default function CouponBox() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const {
    coupon,
    applyCoupon,
    removeCoupon,
  } = useShop();

  const submit = () => {
    const success = applyCoupon(code);

    setMessage(
      success
        ? "Coupon applied successfully!"
        : "Invalid coupon code"
    );

    if (success) {
      setCode("");
    }
  };

  return (
    <div className="
      rounded-2xl
      border border-slate-200
      bg-white p-5
      dark:border-slate-800
      dark:bg-slate-900
    ">
      <h3 className="
        flex items-center gap-2
        font-black
      ">
        <Tag
          size={18}
          className="text-green-600"
        />
        Coupon Code
      </h3>

      {coupon ? (
        <div className="
          mt-4 flex items-center
          justify-between
          rounded-xl
          bg-green-50 p-4
          dark:bg-green-950/30
        ">
          <div className="
            flex items-center gap-2
            text-green-700
            dark:text-green-400
          ">
            <Check size={18} />

            <span className="font-bold">
              {coupon.code} applied
            </span>
          </div>

          <button
            onClick={removeCoupon}
            className="
              text-sm font-bold
              text-red-500
            "
          >
            Remove
          </button>
        </div>
      ) : (
        <>
          <div className="
            mt-4 flex gap-2
          ">
            <input
              value={code}
              onChange={(e) =>
                setCode(e.target.value)
              }
              placeholder="DINA10"
              className="
                min-w-0 flex-1
                rounded-xl
                border border-slate-200
                bg-slate-50
                px-4 py-3
                outline-none
                focus:border-green-500
                dark:border-slate-700
                dark:bg-slate-800
              "
            />

            <motion.button
              whileTap={{
                scale: 0.95,
              }}
              onClick={submit}
              className="
                rounded-xl
                bg-green-600
                px-5
                font-bold text-white
              "
            >
              Apply
            </motion.button>
          </div>

          {message && (
            <p className="
              mt-3 text-sm
              font-semibold
              text-slate-500
            ">
              {message}
            </p>
          )}

          <p className="
            mt-3 text-xs
            text-slate-400
          ">
            Try DINA10, SAVE20 or FRESH15
          </p>
        </>
      )}
    </div>
  );
}