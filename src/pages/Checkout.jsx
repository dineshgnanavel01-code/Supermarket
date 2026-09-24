import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    subtotal,
    delivery,
    clearCart,
    showToast,
  } = useShop();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cart.length) {
      showToast("Your cart is empty");
      return;
    }

    clearCart();

    navigate("/order-success");
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-4xl font-black">
        Checkout
      </h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border p-6 dark:border-gray-800"
        >
          <h2 className="text-2xl font-black">
            Delivery Details
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["name", "Full Name"],
              ["phone", "Phone Number"],
              ["city", "City"],
              ["pincode", "Pincode"],
            ].map(([key, label]) => (
              <input
                key={key}
                required
                placeholder={label}
                value={form[key]}
                onChange={(e) =>
                  setForm({
                    ...form,
                    [key]: e.target.value,
                  })
                }
                className="rounded-xl border px-4 py-4 outline-none dark:border-gray-700 dark:bg-gray-900"
              />
            ))}
          </div>

          <textarea
            required
            placeholder="Full Address"
            value={form.address}
            onChange={(e) =>
              setForm({
                ...form,
                address: e.target.value,
              })
            }
            className="mt-4 min-h-32 w-full rounded-xl border px-4 py-4 outline-none dark:border-gray-700 dark:bg-gray-900"
          />

          <button className="mt-6 w-full rounded-xl bg-indigo-600 py-4 font-bold text-white">
            Place Order
          </button>
        </form>

        <div className="h-fit rounded-3xl border p-6 dark:border-gray-800">
          <h2 className="text-xl font-black">
            Order Total
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-xl font-black">
                <span>Total</span>
                <span>
                  ₹{subtotal + delivery}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}