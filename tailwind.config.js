/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { webster: "#0A0FFA" },
      fontFamily: {
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
