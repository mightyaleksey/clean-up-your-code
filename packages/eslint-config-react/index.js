'use strict';

module.exports = {
  env: {
    browser: true,
    process: true,
  },
  extends: '@sullenor/eslint-config',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
  },
};
