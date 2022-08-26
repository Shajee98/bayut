/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'sm': {min: "320px", max: "480px"},
        'md': "768px",
      },
      colors: {
        "hb": "rgba(34,34,34,.75)"
      },
      height: {
        "96": "600px"
      }
    },
  },
  plugins: [],
}
