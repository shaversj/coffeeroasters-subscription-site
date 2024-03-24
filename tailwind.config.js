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
        "pale-orange": "#FDD6BA",
        "light-cream": "#FEFCF7",
        grey: "#83888f",
        "project-grey": "#83888f",
      },
      backgroundImage: {
        "hero-mobile": "url('/image-hero-coffeepress.jpg')",
        "hero-desktop": "url('/src/assets/home/desktop-hero-coffee.jpg')",
        "about-hero-desktop": "url('/public/assets/about/desktop/image-hero-whitecup.jpg')",
        "about-hero-tablet": "url('/public/assets/about/tablet/image-hero-whitecup.jpg')",
        "about-hero-mobile": "url('/assets/about/mobile/image-hero-whitecup.jpg')",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)"],
        barlow: ["var(--font-barlow)"],
      },
    },
  },
  plugins: [],
};
