/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    // require('taos/plugin')
  ],
  important: true,
  // safelist: [
  // '!duration-[0ms]',
  // '!delay-[0ms]',
  // 'html.js :where([class*="taos:"]:not(.taos-init))'
  // ],
  // content: {
  //   transform: (content) => content.replace(/taos:/g, ''),
  // },
}

