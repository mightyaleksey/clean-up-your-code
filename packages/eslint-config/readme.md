eslint-config
=============

The set of configuration files for ESLint.


## Installation

```
yarn add @sullenor/eslint-config --dev
```


## Usage

Create the `.eslintrc.js` file with the following content:

```js
'use strict';

module.exports = {
  extends: '@sullenor/eslint-config',
};
```

or add `eslintConfig` field to the `package.json`:

```json
{
  "name": "<your project>",
  "eslintConfig": {
    "extends": "@sullenor/eslint-config"
  }
}
```

In case you use es6 imports, add the following parser options:

```json
{
  "parserOptions": {
    "sourceType": "module"
  }
}
```

so it will be:

```js
'use strict';

module.exports = {
  parserOptions: {
    sourceType: 'module',
  },

  extends: '@sullenor/eslint-config',
};
```


## License

> The MIT License
