module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["react-app", "react-app/jest"],
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  ignorePatterns: ["/lib/**/*"],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "import/no-anonymous-default-export": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "error",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    },
  ],
};
