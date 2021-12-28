import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
})
