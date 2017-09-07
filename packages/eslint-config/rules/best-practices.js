'use strict';

// @see http://eslint.org/docs/rules/#best-practices
const rules = {
  // enforce getter and setter pairs in objects
  'accessor-pairs': 0,
  // enforce return statements in callbacks of array methods
  'array-callback-return': 2,
  // enforce the use of variables within the scope they are defined
  'block-scoped-var': 2,
  // enforce that class methods utilize this
  'class-methods-use-this': 0,
  // enforce a maximum cyclomatic complexity allowed in a program
  // 'complexity': 0,
  // require return statements to either always or never specify values
  'consistent-return': 0,
  // enforce consistent brace style for all control statements
  'curly':
  [
    2,
    'multi',
    'consistent',
  ],
  // require default cases in switch statements
  'default-case': 0,
  // enforce consistent newlines before and after dots
  'dot-location':
  [
    2,
    'property',
  ],
  // enforce dot notation whenever possible
  'dot-notation': 2,
  // require the use of === and !==
  'eqeqeq':
  [
    2,
    'always',
  ],
  // require for-in loops to include an if statement
  'guard-for-in': 2,
  // disallow the use of alert, confirm, and prompt
  'no-alert': 2,
  // disallow the use of arguments.caller or arguments.callee
  'no-caller': 2,
  // disallow lexical declarations in case clauses
  'no-case-declarations': 0,
  // disallow division operators explicitly at the beginning of regular expressions
  // 'no-div-regex': 0,
  // disallow else blocks after return statements in if statements
  'no-else-return': 2,
  // disallow empty functions
  'no-empty-function': [
    2,
    {
      allow:
      [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    },
  ],
  // disallow empty destructuring patterns
  'no-empty-pattern': 2,
  // disallow null comparisons without type-checking operators
  'no-eq-null': 2,
  // disallow the use of eval()
  'no-eval': 2,
  // disallow extending native types
  'no-extend-native': 2,
  // disallow unnecessary calls to .bind()
  'no-extra-bind': 2,
  // disallow unnecessary labels
  'no-extra-label': 2,
  // disallow fallthrough of case statements
  'no-fallthrough': 2,
  // disallow leading or trailing decimal points in numeric literals
  'no-floating-decimal': 2,
  // disallow assignments to native objects or read-only global variables
  'no-global-assign': 2,
  // disallow shorthand type conversions
  'no-implicit-coercion': 2,
  // disallow variable and function declarations in the global scope
  // 'no-implicit-globals': 0,
  // disallow the use of eval()-like methods
  'no-implied-eval': 2,
  // disallow this keywords outside of classes or class-like objects
  'no-invalid-this': 2,
  // disallow the use of the __iterator__ property
  'no-iterator': 2,
  // disallow labeled statements
  'no-labels': 2,
  // disallow unnecessary nested blocks
  'no-lone-blocks': 2,
  // disallow function declarations and expressions inside loop statements
  'no-loop-func': 2,
  // disallow magic numbers
  // 'no-magic-numbers': 0,
  // disallow multiple spaces
  'no-multi-spaces': 2,
  // disallow multiline strings
  'no-multi-str': 2,
  // disallow new operators outside of assignments or comparisons
  'no-new': 2,
  // disallow new operators with the Function object
  'no-new-func': 2,
  // disallow new operators with the String, Number, and Boolean objects
  'no-new-wrappers': 2,
  // disallow octal literals
  'no-octal': 2,
  // disallow octal escape sequences in string literals
  'no-octal-escape': 2,
  // disallow reassigning function parameters
  'no-param-reassign': 0,
  // disallow the use of the __proto__ property
  'no-proto': 2,
  // disallow variable redeclaration
  'no-redeclare': 2,
  // disallow certain properties on certain objects
  'no-restricted-properties': 2,
  // disallow assignment operators in return statements
  'no-return-assign': 0,
  // disallow unnecessary return await
  'no-return-await': 2,
  // disallow javascript: urls
  'no-script-url': 2,
  // disallow assignments where both sides are exactly the same
  'no-self-assign': 2,
  // disallow comparisons where both sides are exactly the same
  'no-self-compare': 2,
  // disallow comma operators
  'no-sequences': 0,
  // disallow throwing literals as exceptions
  'no-throw-literal': 2,
  // disallow unmodified loop conditions
  'no-unmodified-loop-condition': 2,
  // disallow unused expressions
  'no-unused-expressions': 2,
  // disallow unused labels
  'no-unused-labels': 2,
  // disallow unnecessary calls to .call() and .apply()
  'no-useless-call': 2,
  // disallow unnecessary concatenation of literals or template literals
  'no-useless-concat': 2,
  // disallow unnecessary escape characters
  'no-useless-escape': 2,
  // disallow redundant return statements
  'no-useless-return': 2,
  // disallow void operators
  'no-void': 0,
  // disallow specified warning terms in comments
  'no-warning-comments': 0,
  // disallow with statements
  'no-with': 2,
  // require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': 2,
  // enforce the consistent use of the radix argument when using parseInt()
  'radix': 2,
  // disallow async functions which have no await expression
  'require-await': 2,
  // require var declarations be placed at the top of their containing scope
  'vars-on-top': 0,
  // require parentheses around immediate function invocations
  'wrap-iife':
  [
    2,
    'inside',
  ],
  // require or disallow “Yoda” conditions
  'yoda':
  [
    2,
    'never',
    {
      exceptRange: true,
    },
  ],
};

module.exports = {rules};
