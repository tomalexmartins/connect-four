/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // Ensure this path is correct
  theme: {
    extend: {
      colors: {
        redish: "#E63946",
        cream: "#F1FAEE",
        yellow: "#FFF600",
        blueish: "#7CB0F9",
        navy: "#094292",
      },
      fontFamily: {
        pixel: ["'Pixelify Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
