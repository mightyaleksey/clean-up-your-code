'use strict';

module.exports = {
  env: {
    browser: true,
  },
  extends: './index.js',
  globals: {
    process: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'script',
  },
};
