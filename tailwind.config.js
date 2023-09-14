/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'header': '#1a202c',
      'text': '#2e353f',
      'primary': '#005b99',
      'text-light': '#4f5969',
      'accent': '#d1dce5',
      'black': '#000000',
      'gray-400': '#9da3b0'
    },
    fontFamily: {
      sans: [
        "MontserratVariable",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      serif: ["Merriweather", "Georgia", "Cambria", "Times New Roman"],
    },
    extend: {
      minWidth: {
        '50': '50px',
      },
      height: {
        '1': '1px'
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
