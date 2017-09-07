'use strict';

// @see http://eslint.org/docs/rules/#variables
const rules = {
  // require or disallow initialization in variable declarations
  'init-declarations': 0,
  // disallow catch clause parameters from shadowing variables in the outer scope
  // 'no-catch-shadow': 0,
  // disallow deleting variables
  // 'no-delete-var': 0,
  // disallow labels that share a name with a variable
  'no-label-var': 2,
  // disallow specified global variables
  'no-restricted-globals': 2,
  // disallow variable declarations from shadowing variables declared in the outer scope
  'no-shadow': 0,
  // disallow identifiers from shadowing restricted names
  'no-shadow-restricted-names': 2,
  // disallow the use of undeclared variables unless mentioned in /*global */ comments
  'no-undef': 2,
  // disallow initializing variables to undefined
  'no-undef-init': 2,
  // disallow the use of undefined as an identifier
  'no-undefined': 0,
  // disallow unused variables
  'no-unused-vars': 2,
  // disallow the use of variables before they are defined
  'no-use-before-define':
  [
    2,
    {
      functions: false,
    },
  ],
};

module.exports = {rules};
