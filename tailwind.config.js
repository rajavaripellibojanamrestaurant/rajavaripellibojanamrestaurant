/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: '#5C1A1B', dark: '#3D0F10', light: '#7A2426' },
        marigold: { DEFAULT: '#E8732A', dark: '#C95A1B', light: '#F4A05B' },
        gold: { DEFAULT: '#C9A227', light: '#E6CD7E', dark: '#9A7A14' },
        leaf: { DEFAULT: '#3F6B3B', dark: '#2A4A27' },
        cream: { DEFAULT: '#FBEEDD', dark: '#F3E0C7' },
        ink: '#241412',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
      },
      backgroundImage: {
        'banana-leaf': "radial-gradient(ellipse at top, #4d7a47 0%, #2c4a28 70%)",
      },
    },
  },
  plugins: [],
}
