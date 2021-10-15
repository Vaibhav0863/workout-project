module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bookmark-pink': '#F24B88',
        'bookmark-dark-pink': '#59253E',
        'bookmark-black': '#1F1C26',
        'bookmark-dark-black': '#0D0D0D',
        'bookmark-light-black': '#332F3C',
        'bookmark-white': '#F2F2F2',
      },
      letterSpacing: {
        widest: '.25em',
        'widest-1': '.50rem'
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
