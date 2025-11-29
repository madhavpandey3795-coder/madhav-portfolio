/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          pcb: {
            900: "#071019",
            teal: "#00d4b8",
            green: "#19d17b",
            blue: "#00aaff",
          },
        },
      },
    },
    plugins: [],
  }
  