'use strict';

// @see http://eslint.org/docs/rules/#nodejs-and-commonjs
const rules = {
  // require return statements after callbacks
  'callback-return': 2,
  // require require() calls to be placed at top-level module scope
  'global-require': 0,
  // require error handling in callbacks
  'handle-callback-err': 2,
  // disallow require calls to be mixed with regular variable declarations
  'no-mixed-requires': 2,
  // disallow new operators with calls to require
  'no-new-require': 2,
  // disallow string concatenation with __dirname and __filename
  'no-path-concat': 2,
  // disallow the use of process.env
  'no-process-env': 0,
  // disallow the use of process.exit()
  'no-process-exit': 2,
  // disallow specified modules when loaded by require
  'no-restricted-modules': 2,
  // disallow synchronous methods
  'no-sync': 2,
};

module.exports = {rules};
