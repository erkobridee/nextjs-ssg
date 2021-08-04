/*
  default tailwind css configuration
  https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

  Customizing PostCSS Config
  https://nextjs.org/docs/advanced-features/customizing-postcss-config

  theme configuration
  https://tailwindcss.com/docs/theme

  customizing colors
  https://tailwindcss.com/docs/customizing-colors

  naming colors
  https://tailwindcss.com/docs/customizing-colors#naming-your-colors
*/

module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.{jsx,tsx,css,scss}'],
};
