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
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'script',
  },
};
