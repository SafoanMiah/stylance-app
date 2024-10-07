// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //https://coolors.co/visualizer/adc178-dde5b6-f0ead2-a98467-6c584c
        primary: {
          100: "rgb(237, 237, 237)",
          200: "rgb(240, 234, 210)",
        },
        secondary: {
          100: "rgb(169, 132, 103)",
          200: "rgb(108, 88, 76)",
          300: "rgb(56, 46, 41)",
          400: "rgb(28, 23, 20)",
        },
        accent: {
          100: "rgb(221, 229, 182)",
          200: "rgb(173, 196, 120)",
          300: "rgb(125, 163, 58)",
        }
      },
    },
  },
  plugins: [],
}