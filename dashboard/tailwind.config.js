/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    colors: {
      primary: "#FF6D60",
      secondary: {
        DEFAULT: "#F7D060",
        light: "#F3E99F",
      },
      green: "#98D8AA",
      black: {
        DEFAULT: "#1A1717",
        80: "#454343",
        60: "#6E6D6D",
        gray: "#838282",
        25: "#B8B8B8",
        light_gray: "#DAD9D9",
      },
      white: {
        DEFAULT: "#fff",
        subtle: "#E7E7E7",
        light: "rgba(255,255,255,0.5)",
      },
      blue: {
        DEFAULT: "#067FD0",
        light_dark: "#223BC9",
        dark: "#151A7B",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};


