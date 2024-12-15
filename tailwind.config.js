/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0F1218',
          secondary: '#151922',
        },
        primary: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
        },
        accent: {
          purple: '#8B5CF6',
          pink: '#EC4899',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
        }
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}