/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
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
        subtle: "rgb(255, 251, 251)",
        light: "rgba(255,255,255,0.5)",
        toned: "#F7F8FA",
      },
      blue: {
        DEFAULT: "#0583d2",
        light: "#b8e3ff",
        dark: "#1d4e89",
        malibu: "#4fd6f7",
      },
      red: {
        DEFAULT: "rgb(246, 45, 58)",
        pink: "rgb(217, 73, 140)"
      }
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1025px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
