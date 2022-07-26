/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#d4d4d8',
        yell: '#fbbf24',
        v1o: '#8b5cf6',
      },
      screens: {
        '2xl': '1320px',
        sm: '480px',
      },
    },
  },
  plugins: [],
}

// #2dd4bf
