/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./hooks/**/*.{js,jsx,ts,tsx}", "./lib/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#141414",
        gold: "#C9A84C",
        "gold-light": "#E8C96A",
        "text-primary": "#F5F5F0",
        subtext: "#6B6B6B",
        border: "#1E1E1E",
        success: "#52A052",
        error: "#E05252",
      },
      letterSpacing: {
        luxe: "0.24em",
      },
    },
  },
  plugins: [],
};
