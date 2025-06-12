module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        kantumruy: ["Kantumruy Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite")],
};
