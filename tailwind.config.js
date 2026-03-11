/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
      },
      colors: {
        accent: '#00f5c4',
        dark: {
          900: '#080b10',
          800: '#0d1117',
          700: '#111820',
        },
      },
    },
  },
  plugins: [],
}