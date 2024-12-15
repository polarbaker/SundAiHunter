/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mackinac: ['"P22 Mackinac Pro"', "serif"],
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        "space-mono": ['"Space Mono"', ...defaultTheme.fontFamily.mono],
        "fira-code": ['"Fira Code"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xs: "0.6rem",
        sm: "0.7rem",
        base: "0.8rem",
        lg: "0.9rem",
        xl: "1rem",
        "2xl": "1.125rem",
        "3xl": "1.35rem",
        "4xl": "1.7rem",
        "5xl": "2rem",
        "6xl": "2.75rem",
      },
      colors: {
        background: {
          DEFAULT: '#0F1218',
          secondary: '#151922',
        },
        primary: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          light: '#A78BFA',
        },
        accent: {
          purple: '#8B5CF6',
          pink: '#EC4899',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
        },
        indigo: {
          600: "#4f46e5",
          700: "#4338ca",
          900: "#312e81",
        },
      },
      animation: {
        "slide-left": "slideLeft 1s ease-out",
        "fade-in": "fadeIn 1s ease-out",
        "scroll-vertical": "scroll-vertical 15s linear infinite",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scroll-vertical": {
          "0%": { "background-position": "50% 0%" },
          "100%": { "background-position": "50% 200%" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-scrollbar'),
  ],
  darkMode: "class",
}