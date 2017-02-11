'use strict';

/* eslint quote-props: ["error", "consistent"] */
const rules = {
  'array-bracket-spacing': [2, 'never'],
  'arrow-body-style': [2, 'as-needed'],
  'arrow-parens': [2, 'as-needed'],
  'arrow-spacing': 2,
  'block-spacing': [2, 'always'],
  'brace-style': [2, '1tbs'],
  'capitalized-comments': 0,
  'comma-dangle': [2, 'always-multiline'],
  'comma-spacing': [0, {before: false, after: true}],
  'comma-style': [2, 'last'],
  'computed-property-spacing': [2, 'never'],
  'curly': [2, 'multi', 'consistent'],
  'dot-location': [2, 'property'],
  'dot-notation': 2,
  'eol-last': [2, 'always'],
  'eqeqeq': [2, 'always'],
  'func-call-spacing': [2, 'never'],
  'generator-star-spacing': [2, {before: true, after: false}],
  'indent': [2, 2],
  'jsx-quotes': [2, 'prefer-single'],
  'key-spacing': [2, {beforeColon: false, afterColon: true, mode: 'strict'}],
  'keyword-spacing': [2, {before: true, after: true}],
  'linebreak-style': [2, 'unix'],
  'lines-around-comment': 0,
  'lines-around-directive': [2, {before: 'never', after: 'always'}],
  'new-parens': 2,
  'newline-after-var': [2, 'always'],
  'newline-before-return': 2,
  'no-else-return': 2,
  'no-extra-bind': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-label': 2,
  'no-extra-parens': [2, 'all', {ignoreJSX: 'multi-line'}],
  'no-extra-semi': 2,
  'no-floating-decimal': 2,
  'no-implicit-coercion': 0,
  'no-lonely-if': 2,
  'no-multi-spaces': 2,
  'no-multiple-empty-lines': [2, {max: 1, maxBOF: 0, maxEOF: 0}],
  'no-regex-spaces': 2,
  'no-trailing-spaces': 2,
  'no-undef-init': 2,
  'no-unneeded-ternary': 2,
  'no-unsafe-negation': 2,
  'no-useless-computed-key': 2,
  'no-useless-rename': 2,
  'no-useless-return': 2,
  'no-var': 2,
  'no-whitespace-before-property': 2,
  'object-curly-newline': [0, {multiline: true}],
  'object-curly-spacing': [2, 'never'],
  'object-property-newline': 0,
  'object-shorthand': ['error', 'always', {ignoreConstructors: false, avoidQuotes: true}],
  'one-var': [2, 'never'],
  'one-var-declaration-per-line': [2, 'always'],
  'operator-assignment': [2, 'always'],
  'operator-linebreak': [2, 'after', {overrides: {'?': 'before', ':': 'before'}}],
  'padded-blocks': [2, 'never'],
  'prefer-arrow-callback': [2, {allowNamedFunctions: true}],
  'prefer-const': 2,
  'prefer-numeric-literals': 0,
  'prefer-spread': 2,
  'prefer-template': 2,
  'quote-props': [2, 'as-needed'],
  'quotes': [2, 'single'],
  'rest-spread-spacing': [2, 'never'],
  'semi': [2, 'always'],
  'semi-spacing': [2, {before: false, after: true}],
  'sort-imports': [0, {memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']}],
  'space-before-blocks': 2,
  'space-before-function-paren': [2, 'never'],
  'space-in-parens': [2, 'never'],
  'space-infix-ops': 2,
  'space-unary-ops': [2, {nonwords: false, words: true}],
  'spaced-comment': [2, 'always'],
  'strict': 2,
  'template-curly-spacing': [2, 'never'],
  'template-tag-spacing': [2, 'never'],
  'unicode-bom': [2, 'never'],
  'wrap-iife': [2, 'inside'],
  'wrap-regex': 0,
  'yield-star-spacing': [2, {before: false, after: true}],
  'yoda': [2, 'never', {exceptRange: true}],
};

module.exports = {rules};