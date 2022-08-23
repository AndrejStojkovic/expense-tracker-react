/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/*..{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
        '4': '4px'
      },
      outlineWidth: {
        '1': '1px',
        '4': '4px'
      },
      dropShadow: {
        'custom': '0 4px 3px rgb(0 0 0 / 0.05)'
      },
      fontSize: {
        '0': '0',
      },
      colors: {},
      fontFamily: {
        raleway: ["Raleway", "sans-serif"]
      },
      scale: {
        'base': '1.025'
      }
    },
  },
  plugins: [],
}
