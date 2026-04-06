export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        western: ['Roboto Slab', 'serif'],
        brand: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}