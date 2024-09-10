/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal", " sans-serif"],
      },
      colors: {
        colorGreyText: "#454546",
        colorBrand: "#464647",
        colorWhite: "#FFFF",
        colorBrandHover: "#000",
        colorError: "#F44336",
        colorGreyLight: "#E8E7E8",
        colorADCOMRC: "#E54F35",
        colorADMEDIA: "#8E3292",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
