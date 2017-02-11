'use strict';

module.exports = Object.assign({
  env: {
    commonjs: true,
    es6: true,
  },
  extends: 'eslint:recommended',
}, require('./preset/fixable'));
