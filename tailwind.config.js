/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        brand: {
          'dark': '#255465',      // Azul petróleo oscuro
          'medium': '#68AEC8',    // Azul cielo medio
          'light': '#B3D7E3',     // Azul claro pastel
          'pale': '#E1EFF4',      // Azul muy pálido
          'neutral': '#D9D9D9',   // Gris claro neutro
          // Darker variants for hover states
          'dark-hover': '#1a3d48',
          'medium-hover': '#5a9bb8',
        }
      },
    },
  },
  plugins: [],
}