/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        cream: "#F6F1E7",
        cafeBlack: "#0a0a0a",
        afiA: "#F2B705",
        afiF: "#4C7A3D",
        afiI: "#6B4226",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
