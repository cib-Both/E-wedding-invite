/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sky: "#DCEEF6",
      "sky-deep": "#8FC0D9",
      denim: "#4C7E97",
      ink: "#2C3E4A",
      cream: "#F8F9F6",
      blush: "#F2ECE4",
      gold: "#C9A66B",
      paper: "#FBFDFE",
      white: "#ffffff",
      "white/95": "rgba(255, 255, 255, 0.95)",
      "white/16": "rgba(255, 255, 255, 0.16)",
      "white/18": "rgba(255, 255, 255, 0.18)",
      "white/30": "rgba(255, 255, 255, 0.3)",
      "white/80": "rgba(255, 255, 255, 0.8)",
      "blue-900": "#1e3a8a",
      gray: {
        600: "#556570",
        700: "#3c505c",
      },
      "yellow-200": "#EAD9B6",
    },
    fontFamily: {
      script: ["Alex Brush", "cursive"],
      serif: ["Cormorant Garamond", "serif"],
      sans: ["Jost", "sans-serif"],
    },
    animation: {
      drift: "drift linear infinite",
      rise: "rise 1s ease forwards",
      "spin-in": "spin-in 1.4s ease",
      bob: "bob 2.6s ease-in-out infinite",
    },
    keyframes: {
      drift: {
        "0%": { transform: "translateY(-8vh) translateX(0) rotate(0deg)" },
        "100%": { transform: "translateY(112vh) translateX(var(--drift-x, 40px)) rotate(180deg)" },
      },
      rise: {
        from: { opacity: "0", transform: "translateY(16px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      "spin-in": {
        from: { transform: "rotate(-25deg) scale(0.8)" },
        to: { transform: "rotate(0deg) scale(1)" },
      },
      bob: {
        "0%, 100%": { transform: "translate(-50%, 0)" },
        "50%": { transform: "translate(-50%, 8px)" },
      },
    },
  },
}
