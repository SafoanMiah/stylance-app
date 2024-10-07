// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255, 253, 232)",
        secondary: {
          DEFAULT: "rgb(54, 44, 30)",
          100: "#FF9001",
          200: "#FF8E01",
        },
      },
    },
  },
  plugins: [],
}