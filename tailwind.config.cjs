/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      clrGrey1: "hsl(209, 61%, 16%)",
      clrGrey5: "hsl(210, 22%, 49%)",
      clrPrimary5: "hsl(205, 78%, 60%)",
      clrPrimary3: "hsl(205, 63%, 48%)",
      clrWhite: "#fff",
      clrRedDark: "hsl(360, 67%, 44%)",
      clrRedLight: "hsl(360, 71%, 66%)",
      clrBlack: "#222",
    },
  },
  plugins: [],
};
