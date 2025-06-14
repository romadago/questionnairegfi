// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Assurez-vous que ce chemin est correct
  ],
  theme: {
    extend: {
      colors: {
        'fond-sombre': '#172435',
        'cyan-vif': '#00FFD2',
      },
    },
  },
  plugins: [],
}