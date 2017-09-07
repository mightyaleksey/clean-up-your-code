'use strict';

// @see http://eslint.org/docs/rules/#stylistic-issues
const rules = {
  // enforce consistent spacing inside array brackets
  'array-bracket-spacing':
  [
    2,
    'never',
  ],
  // enforce consistent spacing inside single-line blocks
  'block-spacing':
  [
    2,
    'always',
  ],
  // enforce consistent brace style for blocks
  'brace-style':
  [
    2,
    '1tbs',
    {
      allowSingleLine: true,
    },
  ],
  // enforce camelcase naming convention
  'camelcase':
  [
    2,
    {
      properties: 'never',
    },
  ],
  // enforce or disallow capitalization of the first letter of a comment
  'capitalized-comments': 0,
  // require or disallow trailing commas
  'comma-dangle':
  [
    2,
    'always-multiline',
  ],
  // enforce consistent spacing before and after commas
  'comma-spacing':
  [
    2,
    {
      before: false,
      after: true,
    },
  ],
  // enforce consistent comma style
  'comma-style':
  [
    2,
    'last',
  ],
  // enforce consistent spacing inside computed property brackets
  'computed-property-spacing':
  [
    2,
    'never',
  ],
  // enforce consistent naming when capturing the current execution context
  'consistent-this':
  [
    2,
    '_this',
  ],
  // require or disallow newline at the end of files
  'eol-last':
  [
    2,
    'always',
  ],
  // require or disallow spacing between function identifiers and their invocations
  'func-call-spacing':
  [
    2,
    'never',
  ],
  // require function names to match the name of the variable or property to which they are assigned
  // 'func-name-matching': 0,
  // require or disallow named function expressions
  'func-names':
  [
    2,
    'as-needed',
  ],
  // enforce the consistent use of either function declarations or expressions
  'func-style':
  [
    2,
    'declaration',
    {
      allowArrowFunctions: true,
    },
  ],
  // disallow specified identifiers
  'id-blacklist': 2,
  // enforce minimum and maximum identifier lengths
  'id-length': 0,
  // require identifiers to match a specified regular expression
  'id-match': 2,
  // enforce consistent indentation
  'indent':
  [
    2,
    2,
  ],
  // enforce the consistent use of either double or single quotes in JSX attributes
  'jsx-quotes':
  [
    2,
    'prefer-single',
  ],
  // enforce consistent spacing between keys and values in object literal properties
  'key-spacing':
  [
    2,
    {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    },
  ],
  // enforce consistent spacing before and after keywords
  'keyword-spacing':
  [
    2,
    {
      before: true,
      after: true,
    },
  ],
  // enforce position of line comments
  // 'line-comment-position': 0,
  // enforce consistent linebreak style
  'linebreak-style':
  [
    2,
    'unix',
  ],
  // require empty lines around comments
  'lines-around-comment': 0,
  // require or disallow newlines around directives
  'lines-around-directive':
  [
    2,
    {
      before: 'never',
      after: 'always',
    },
  ],
  // enforce a maximum depth that blocks can be nested
  'max-depth': 2,
  // enforce a maximum line length
  'max-len':
  [
    1,
    {
      code: 80,
      ignorePattern: '\'.{60,}?[^\\\\]\'',
      ignoreUrls: true,
      tabWidth: 2,
    },
  ],
  // enforce a maximum number of lines per file
  // 'max-lines': 0,
  // enforce a maximum depth that callbacks can be nested
  'max-nested-callbacks': 2,
  // enforce a maximum number of parameters in function definitions
  'max-params': 0,
  // enforce a maximum number of statements allowed in function blocks
  'max-statements': 0,
  // enforce a maximum number of statements allowed per line
  'max-statements-per-line': 0,
  // enforce newlines between operands of ternary expressions
  // 'multiline-ternary': 0,
  // require constructor names to begin with a capital letter
  'new-cap':
  [
    2,
    {
      capIsNew: false,
      newIsCap: true,
    },
  ],
  // require parentheses when invoking a constructor with no arguments
  'new-parens': 2,
  // require or disallow an empty line after variable declarations
  'newline-after-var': 0,
  // require an empty line before return statements
  'newline-before-return': 0,
  // require a newline after each call in a method chain
  'newline-per-chained-call': 0,
  // disallow Array constructors
  'no-array-constructor': 2,
  // disallow bitwise operators
  'no-bitwise': 2,
  // disallow continue statements
  'no-continue': 2,
  // disallow inline comments after code
  'no-inline-comments': 0,
  // disallow if statements as the only statement in else blocks
  'no-lonely-if': 2,
  // disallow mixed binary operators
  'no-mixed-operators': 0,
  // disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 2,
  // disallow use of chained assignment expressions
  'no-multi-assign': 0,
  // disallow multiple empty lines
  'no-multiple-empty-lines':
  [
    2,
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    },
  ],
  // disallow negated conditions
  'no-negated-condition': 0,
  // disallow nested ternary expressions
  'no-nested-ternary': 2,
  // disallow Object constructors
  'no-new-object': 2,
  // disallow the unary operators ++ and --
  'no-plusplus': 0,
  // disallow specified syntax
  'no-restricted-syntax': 2,
  // disallow all tabs
  'no-tabs': 2,
  // disallow ternary operators
  'no-ternary': 0,
  // disallow trailing whitespace at the end of lines
  'no-trailing-spaces': 2,
  // disallow dangling underscores in identifiers
  'no-underscore-dangle': 0,
  // disallow ternary operators when simpler alternatives exist
  'no-unneeded-ternary': 2,
  // disallow whitespace before properties
  'no-whitespace-before-property': 2,
  // enforce the location of single-line statements
  // 'nonblock-statement-body-position': 0,
  // https://github.com/eslint/eslint/issues/6488
  // enforce consistent line breaks inside braces
  'object-curly-newline':
  [
    0,
    {
      multiline: true,
    },
  ],
  // enforce consistent spacing inside braces
  'object-curly-spacing':
  [
    2,
    'never',
  ],
  // enforce placing object properties on separate lines
  'object-property-newline': 0,
  // enforce variables to be declared either together or separately in functions
  'one-var':
  [
    2,
    'never',
  ],
  // require or disallow newlines around variable declarations
  'one-var-declaration-per-line':
  [
    2,
    'always',
  ],
  // require or disallow assignment operator shorthand where possible
  'operator-assignment':
  [
    2,
    'always',
  ],
  // enforce consistent linebreak style for operators
  'operator-linebreak':
  [
    2,
    'after',
    {
      overrides: {
        '?': 'before',
        ':': 'before',
      },
    },
  ],
  // require or disallow padding within blocks
  'padded-blocks':
  [
    2,
    'never',
  ],
  // require quotes around object literal property names
  'quote-props':
  [
    2,
    'as-needed',
    {
      numbers: true,
    }
  ],
  // enforce the consistent use of either backticks, double, or single quotes
  'quotes':
  [
    2,
    'single',
  ],
  // require JSDoc comments
  'require-jsdoc': 0,
  // require or disallow semicolons instead of ASI
  'semi':
  [
    2,
    'always',
  ],
  // enforce consistent spacing before and after semicolons
  'semi-spacing':
  [
    2,
    {
      before: false,
      after: true,
    },
  ],
  // require object keys to be sorted
  // 'sort-keys': 0,
  // require variables within the same declaration block to be sorted
  'sort-vars': 2,
  // enforce consistent spacing before blocks
  'space-before-blocks': 2,
  // enforce consistent spacing before function definition opening parenthesis
  'space-before-function-paren':
  [
    2,
    {
      anonymous: 'always',
      named: 'never',
    },
  ],
  // enforce consistent spacing inside parentheses
  'space-in-parens':
  [
    2,
    'never',
  ],
  // require spacing around infix operators
  'space-infix-ops': 2,
  // enforce consistent spacing before or after unary operators
  'space-unary-ops':
  [
    2,
    {
      nonwords: false,
      words: true,
    },
  ],
  // enforce consistent spacing after the // or /* in a comment
  'spaced-comment':
  [
    2,
    'always',
  ],
  // require or disallow spacing between template tags and their literals
  'template-tag-spacing':
  [
    2,
    'never',
  ],
  // require or disallow Unicode byte order mark (BOM)
  'unicode-bom':
  [
    2,
    'never',
  ],
  // require parenthesis around regex literals
  'wrap-regex': 0,
};

module.exports = {rules};
