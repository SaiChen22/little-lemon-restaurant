/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['Karla', 'Helvetica Neue', 'sans-serif'],
      serif: ['Markazi Text', 'ui-serif', 'serif']
    },
    colors: {
      white: '#fff',
      gray: '#ddd',
      yellow: '#f4ce14',
      orange: '#ee9972',
      olive: {
        DEFAULT: '#495e57',
        light: '#edefee'
      }
    },
    extend: {
      fontSize: {
        '4.5xl': '2.5rem',
        '5.5xl': '3.5rem'
      },
      width: {
        90: '22.5rem',
        120: '30rem',
        256: '64rem'
      },
      height: {
        18: '4.5rem',
        116: '29rem'
      }
    }
  },
  plugins: []
};
