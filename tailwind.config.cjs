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
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        'purple-900': '#3D00B7',
      },
    },
  },
  plugins: [],
}
