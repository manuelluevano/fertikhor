/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#0a5c3a', // verde profundo de la etiqueta
          accent: '#f4ecdd', // beige claro de fondo
          highlight: '#c62828', // rojo del logo
          gold: '#c9973f',
          ink: '#1f1a17',
        },
      },
      backgroundImage: {
        'hero-crops':
          "linear-gradient(120deg, rgba(10,92,58,0.75), rgba(248,244,239,0.85)), url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
        'cta-greenhouse':
          "linear-gradient(rgba(10,92,58,0.8), rgba(255,249,240,0.85)), url('https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1600&q=80')",
      },
    },
  },
  plugins: [],
}
