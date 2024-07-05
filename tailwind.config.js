/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#7F00FF",
            foreground: "#000000",
          },
          focus: "#7F00FF",
        },
      },
      light: {
        colors: {
          background: "#d8dce6",
          // background: "white",
          primary: {
            DEFAULT: "#7F00FF",
            foreground: "#FFFFFF",
          },
          focus: "#7F00FF",
        },
      },
    },
  })],
}

