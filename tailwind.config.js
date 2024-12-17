/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './css/**/*.css',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
        mono: ['Noto Sans Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
