/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
  
        btnbg:"rgb(126, 144, 254)",
      }
    },
  },
  plugins: [require("daisyui")],
}

