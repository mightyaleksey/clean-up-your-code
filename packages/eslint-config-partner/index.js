'use strict';

module.exports = {
  extends: '@sullenor/eslint-config',
  rules: {
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    curly: [2, 'all'],
    indent: [2, 4],
    'object-curly-newline': [2, {minProperties: 5, multiline: true}],
  },
};
