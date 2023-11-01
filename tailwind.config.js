/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontSize: {
        bsm: '0.625rem',
        sm: '0.8rem',
        base: '0.875',
        x1: '1rem',
        '2xl': '1.125rem',
        '3xl': '1.25rem',
        '4xl': '1.563rem',
        '5xl': '1.953rem',
        '6xl': '2.441rem',
        '7xl': '3.052rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#FFF',
        'black': '#111',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'red': '#f33232',
        'secondary': '#F1F1F1',
        'light-grey': '#E0E0E0',
        'grey': '#C6C6C6',
        'dark': '#1f1f1f',
        'light': '#E4E4E4',
        'secondary2': '#F6F6F6',
        'secondary3': '#F5F5F5',
        'color-title': '#A066FF',
        'color-text': '#B687FF',
        'button': '#B282FF',
        'color-text2': '#1f1f1f',
        'advertising': '#DCC7FF',
        'block-friend': '#F7F1FF',
        'block-friend-hover': '#EFE5FF',
        'purple-300': '#D0B2FF',
        'purple-500': '#BD94FF',
        'loading': '#CCCCCC',
        'online': '#B282FF',
        'offline': '#4f4f4f'
      },
    extend: {},
  },
  plugins: [],
}
