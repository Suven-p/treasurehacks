/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))",
        bgimg: "url('../public/background.png')",
        calendar: "url('../public/calendar.png')",
      },
    },
  },
  plugins: [],
};
