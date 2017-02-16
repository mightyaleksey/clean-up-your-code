'use strict';

module.exports = {
  env: {
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    './preset/best-practices.js',
    './preset/fixable.js',
  ],
};
