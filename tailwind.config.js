/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#1ea7fd",
        },
      },
    },
    fontFamily: {
      sans: [
        "Nunito Sans",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    boxShadow: {
      inner: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
    },
  },
  plugins: [],
};
