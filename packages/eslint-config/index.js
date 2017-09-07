'use strict';

module.exports = {
  env: {
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/commonjs.js',
    './rules/es6.js',
    './rules/possible-errors.js',
    './rules/stylistic.js',
    './rules/variables.js',
  ],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    strict: 2,
  },
};
