'use strict';

module.exports = {
  env: {
    jest: true,
  },
  extends: './index.js',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
};
