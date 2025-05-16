/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["font-pixel"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"PixelifySans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
