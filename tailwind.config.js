/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "rgb(var(--primary-bg))",
        secondaryBg: "rgb(var(--secondary-bg))",
        ternaryBg: "rgb(var(--ternary-bg))",
        swapBg: "rgb(var(--swap-bg))",
        primaryText: "rgb(var(--primary-text))",
        secondaryText: "rgb(var(--secondary-text))",
        ternaryText: "rgb(var(--ternary-text))",
        swapText: "rgb(var(--swap-text))",
        primaryGrey: "rgb(var(--primary-grey))",
        secondaryGrey: "rgb(var(--secondary-grey))",
        highlightBlue: "rgb(var(--highlight-blue))",
        border: "rgb(var(--border))",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        zodiak: ["Zodiak", "serif"],
        canela: ["CanelaText", "serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        black: 900,
      },
      transitionTimingFunction: {
        card: "cubic-bezier(.83,-0.33,0,1.29)",
      },
      screens: {
        md: "780px",
        // => @media (min-width: 768px) { ... }
      },
    },
  },
  plugins: [],
  // Enable IntelliSense
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Enable dark mode
  darkMode: "class",
};
