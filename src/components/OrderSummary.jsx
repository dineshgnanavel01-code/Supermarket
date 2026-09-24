import { motion } from "framer-motion";
import { ArrowRight, Truck } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function OrderSummary({
  onCheckout,
}) {
  const {
    subtotal,
    discount,
    delivery,
    grandTotal,
  } = useShop();

  return (
    <div className="
      rounded-3xl
      border border-slate-200
      bg-white p-6
      shadow-sm
      dark:border-slate-800
      dark:bg-slate-900
    ">
      <h2 className="
        text-xl font-black
      ">
        Order Summary
      </h2>

      <div className="
        mt-6 space-y-4
      ">
        <Row
          label="Subtotal"
          value={`₹${subtotal}`}
        />

        <Row
          label="Discount"
          value={`-₹${discount}`}
          green
        />

        <Row
          label="Delivery"
          value={
            delivery === 0
              ? "FREE"
              : `₹${delivery}`
          }
          green={delivery === 0}
        />

        <div className="
          border-t
          border-slate-200
          pt-4
          dark:border-slate-800
        ">
          <Row
            label="Grand Total"
            value={`₹${grandTotal}`}
            large
          />
        </div>
      </div>

      {delivery > 0 && subtotal > 0 && (
        <div className="
          mt-5 flex items-center gap-3
          rounded-xl
          bg-green-50 p-4
          text-sm text-green-700
          dark:bg-green-950/30
          dark:text-green-400
        ">
          <Truck size={18} />

          Add ₹{999 - subtotal} more
          for free delivery.
        </div>
      )}

      {onCheckout && (
        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={onCheckout}
          className="
            mt-6 flex w-full
            items-center
            justify-center
            rounded-xl
            bg-green-600
            px-5 py-4
            font-black text-white
            shadow-lg
            shadow-green-600/20
          "
        >
          Proceed to Checkout
          <ArrowRight
            size={18}
            className="ml-2"
          />
        </motion.button>
      )}
    </div>
  );
}

function Row({
  label,
  value,
  green,
  large,
}) {
  return (
    <div className="
      flex items-center
      justify-between
    ">
      <span className={
        large
          ? "font-black"
          : "text-slate-500 dark:text-slate-400"
      }>
        {label}
      </span>

      <span className={`
        ${large ? "text-xl font-black" : "font-bold"}
        ${green ? "text-green-600" : ""}
      `}>
        {value}
      </span>
    </div>
  );
}