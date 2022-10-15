/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto Slab',
      },
      colors: {
        darkBlue: '#0768b5',
        primaryBlue: '#2f9ff8',
        lightBlue: '#e0f0f8',
        secondaryBlue: '#ecf5f8',
        primaryGray: '#f4f9f8',
        primaryOrange: '#ef8745',
        primaryText: '#1d405b',
        secondaryText: '#889aa8',
      },
      scale: {
        101: '1.01',
      },
    },
  },
  plugins: [],
}