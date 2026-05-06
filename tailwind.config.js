/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'barn-red': '#C0392B',
        'barn-red-dark': '#A93226',
        'hay-gold': '#F0A500',
        'hay-gold-dark': '#D4920A',
        'grass-green': '#27AE60',
        'grass-green-dark': '#219150',
        cream: '#FAFAF5',
        'cream-dark': '#F0EFE8',
        'near-black': '#1A1A1A',
        'stink-yellow': '#F4D03F',
      },
      fontFamily: {
        headline: ['var(--font-boogaloo)', 'cursive'],
        body: ['var(--font-nunito)', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};
