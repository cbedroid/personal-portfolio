/**  JIT V3.0
 * https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
 */

module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      msm: { max: "640px" },
      mmd: { max: "768px" },
      mlg: { max: "1024px" },
      mxl: { max: "1280px" },
      m2xl: { max: "1536px" },
    },
  },
  extend: {},
  plugins: [],
};
