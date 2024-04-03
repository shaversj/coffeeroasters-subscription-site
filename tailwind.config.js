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
        "hero-mobile": "url('/image-hero-coffeepress.jpg')",
        "hero-desktop": "url('/assets/home/desktop/image-hero-coffeepress.jpg')",
        "hero-tablet": "url('/assets/home/tablet/image-hero-coffeepress.jpg')",
        "about-hero-desktop": "url('/assets/about/desktop/image-hero-whitecup.avif')",
        "about-hero-tablet": "url('/assets/about/tablet/image-hero-whitecup.avif')",
        "about-hero-mobile": "url('/assets/about/mobile/image-hero-whitecup.avif')",
        "plan-hero-desktop": "url('/assets/plan/desktop/image-hero-blackcup.jpg')",
        "plan-hero-tablet": "url('/assets/plan/tablet/image-hero-blackcup.jpg')",
        "plan-hero-mobile": "url('/assets/plan/mobile/image-hero-blackcup.jpg')",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)"],
        barlow: ["var(--font-barlow)"],
      },
    },
  },
  plugins: [],
};
