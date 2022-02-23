module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gray: {
          light: "#F7F7F8"
        },
        primary: "#605BFF",
        red: {
          light: "#FFEDED"
        },
        lightRed: "#F7F7F8"
      },
      spacing: {
        "10px": "10px"
      }
    }
  },
  plugins: []
};
