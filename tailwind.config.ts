import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: { soft: "0 20px 60px rgba(0,0,0,0.08)" },
      borderRadius: { "3xl": "1.5rem" },
    },
  },
  plugins: [],
} satisfies Config;