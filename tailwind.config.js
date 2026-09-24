/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },

        cream: "#f7f8f4",

        dark: {
          900: "#17221b",
          800: "#1f3325",
          700: "#29432f",
        },
      },

      boxShadow: {
        soft: "0 14px 40px rgba(20, 50, 30, 0.08)",
        card: "0 20px 50px rgba(22, 101, 52, 0.10)",
        glow: "0 0 35px rgba(34, 197, 94, 0.22)",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      transitionTimingFunction: {
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      perspective: {
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
    },
  },

  plugins: [],
};