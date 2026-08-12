/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        "navy-deep": "var(--navy-deep)",
        "navy-light": "var(--navy-light)",
        accent: "var(--cyan)",
        accent2: "var(--amber)",
        paper: "var(--paper)",
        "paper-dim": "var(--paper-dim)",
        ink: "var(--ink)",
        "ink-dim": "var(--ink-dim)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
