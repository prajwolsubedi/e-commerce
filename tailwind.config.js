/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
        comic: ["Comic Neue", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        spacing: {
          0.5: "1px", // Custom padding value
        },
      },
    },
  },
  plugins: [],
};
