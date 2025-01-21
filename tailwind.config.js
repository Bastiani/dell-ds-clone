/** @type {import('tailwindcss').Config} */
import theme from './lib/theme'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: { ...theme }
  },
  plugins: []
}
