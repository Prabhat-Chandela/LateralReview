
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        robotoBlack:["Roboto-Black"],
        robotoBold:["Roboto-Bold"],
        robotoMedium:["Roboto-Medium"],
        robotoRegular:["Roboto-Regular"],
      }
    },
  },
  plugins: [],
}

