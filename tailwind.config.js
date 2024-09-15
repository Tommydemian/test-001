/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        container: "min(100% - 2rem, 80em)",
      },
      colors: {
        "neutral-100": "#fff",
        "neutral-900": "#333",
        accent: "#F564A9",
        "accent-hover": "#F88CC0",
        "text-def": "var(--text-color)",
      },
      spacing: {
        "section-padding": "var(--section-padding)",
      },
    },
  },
  plugins: [],
};
