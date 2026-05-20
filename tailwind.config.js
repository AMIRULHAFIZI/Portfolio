export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0e1116",
        surface2: "#13181f",
        accent: "#8c6cff",
        accentSoft: "#7f5bff",
        border: "rgba(148, 163, 184, 0.12)"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(140, 108, 255, 0.12)"
      }
    }
  },
  plugins: []
}
