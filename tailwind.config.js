module.exports = {
  purge: {
    content:["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    options: {
      whitelist: [
        'mode-dark'
      ]
    }
  },
  theme: {
    colors: {
      white: '#F2F2F2',
      black: '#121212',
      gray: {
        light: '#E1E1E1',
        dark: '#212121'
      }
    },
    extend: {},
    fontFamily: {
      sans: ['"Open Sans"','sans-serif'],
      mono: ['"Major Mono Display"', 'mono']
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-focus']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  corePlugins: {
    // container: false
  },
}
