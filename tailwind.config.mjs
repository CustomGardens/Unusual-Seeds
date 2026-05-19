/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "blue-hour": {
          sky: "#1a2840",
          mid: "#2d4a6a",
          deep: "#0f1a26",
          haze: "#243b53",
        },
        parchment: {
          DEFAULT: "rgb(232 228 220 / <alpha-value>)",
          muted: "rgb(168 163 154 / <alpha-value>)",
          faint: "rgb(110 106 100 / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(181 160 136 / <alpha-value>)",
          dim: "rgb(143 130 112 / <alpha-value>)",
        },
        ink: {
          DEFAULT: "#0c1219",
          soft: "#131b24",
          card: "#161f2a",
        },
        window: {
          glow: "rgb(232 196 122 / <alpha-value>)",
        },
      },
      fontFamily: {
        serif: ["Libre Baskerville", "Georgia", "serif"],
        sans: ["Source Sans 3", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["2.75rem", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "blue-hour-sky": "linear-gradient(180deg, #1a2840 0%, #2d4a6a 55%, #0f1a26 100%)",
      },
    },
  },
  plugins: [],
};
