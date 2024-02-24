/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        orange: '#ff8736',
        lightred: '#db5660',
        offwhite: '#d0d0d0',
        lightblue: '#669BBC',
        darkblue: '#003049',
      }
    }
  },

  plugins: [],
};

module.exports = config;
