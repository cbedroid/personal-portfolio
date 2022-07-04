module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {},
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'react-hooks'],
  ignorePatterns: ['node_modules/'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'consistent-return': 'off',
    'global-require': 'off',
  },
  settings: {
    react: {
      version: '^7.29.4', // "detect" automatically picks the version you have installed.
    },
  },
}
