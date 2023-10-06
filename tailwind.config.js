/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'ytsans' : ['YouTube Sans', 'sans-serif'],
      'ytsansd' : ['YouTube Sans Dark', 'sans-serif'],
      'roboto' : ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

/*font-family: 'YouTube Sans', sans-serif;
font-family: 'YouTube Sans Dark', sans-serif;*/