/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e60022",
        primary_dark: "#ad081c",
        black: "#111111",
        icon: "#5f5f5f",
        input_border: "#cdcdcd",
        facebook: "#1a77f2",
      },
    },
  },
  plugins: [],
};
