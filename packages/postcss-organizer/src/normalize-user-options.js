'use strict';

const defaultPreset = require('../presets/default');

const presets = {
  default: defaultPreset,
};

const defaults = {
  'always-semicolon': null,

  'block-indent': null,

  'space-before-colon': null,
  'space-after-colon': null,

  'space-before-selector': null,
  'space-before-opening-brace': null,
  'space-after-opening-brace': null,
  'space-between-declarations': null,
  'space-before-closing-brace': null,

  'sort-order': [],
};

module.exports = function normalizeUserOptions(userOptions) {
  const options = userOptions || {};
  const preset = presets[options.preset] || defaults;

  const config = Object.keys(preset).reduce((cfg, key) => {
    cfg[key] = options[key] || preset[key];
    return cfg;
  }, {});

  return config;
};
