# postcss-organizer
A postcss plugin to keep your css code readable.

## Usage
```js
const postcss = require('postcss');
const postcssOrganizerplugin = require('postcss-organizer');

// You may also overwrite preset options.
// See full list at presets/default.js
const config = { preset: 'default' };

const pcss = postcss([postcssOrganizerplugin(config)]);

pcss.process(css, { from: '...' })
  .then(result => console.log(result.css))
  .catch(error => console.log(error));
```

## License
> MIT License
