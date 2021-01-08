module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#ffa84d',
          DEFAULT: '#ff8200',
          dark: '#d66f03',
        },
      },         
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
