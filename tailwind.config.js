/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        "dark-cyan": "#0E8784",
        "dark-grey-blue": "#333D4B",
        "very-dark-blue": "#2c343e",
        "button-brown": "#f4f1eb",
        "pale-orange": "#FDD6BA",
        "light-cream": "#FEFCF7",
        grey: "#83888f",
        "project-grey": "#83888f",
      },
      backgroundImage: {
        "gradient-180": "linear-gradient(0deg, #fefcf781 0%, #FEFCF7 55.94%)",
        "hero-gradient-180": "linear-gradient(180deg, #d0d0d0 0%, #FEFCF7 100%)",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)"],
        barlow: ["var(--font-barlow)"],
      },
    },
  },
  plugins: [],
};
