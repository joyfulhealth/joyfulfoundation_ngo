module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A4570',
          light: '#6B628F',
          dark: '#332F4F',
        },
        accent: {
          DEFAULT: '#8BC490',
          light: '#B8D8BA',
          dark: '#6BA871',
        },
      }  
    },
  },
  plugins: []
};
