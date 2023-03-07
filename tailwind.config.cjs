/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IntegralCF: ["IntegralCF", "sans-serif"],
        DMSans: ['"DM Sans"', "sans"],
      },
    },
  },
  plugins: [],
}
