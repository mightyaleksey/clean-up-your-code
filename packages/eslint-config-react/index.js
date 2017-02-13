'use strict';

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@sullenor/eslint-config',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
  ],
  globals: {
    process: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'flowtype',
    'react',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
  },
};
