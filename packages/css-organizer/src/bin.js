#!/usr/bin/env node
'use strict';

/* eslint-disable global-require */
const { name, version } = require('../package');
process.title = name;

const CONFIG = '.cssorgrc.js';

const USAGE = `
$ organize <file,glob> [options]

Options:
  -h, --help           Print usage
  -p, --presetf NAME   Preset to use. Available presets: default
  -v, --version        Print version

Examples:

  Format css files in project
  $ organize --preset default src/**/*.css
`;

const minimist = require('minimist');
const argv = minimist(process.argv.slice(2), {
  alias: {
    help: 'h',
    preset: 'p',
    version: 'v',
  },
});

if (argv.version) {
  console.log(version);
  process.exit();
}

if (argv.help) {
  console.log(USAGE);
  process.exit();
}

if (argv._.length === 0) {
  console.log(USAGE);
  process.exit();
}

const postcss = require('postcss');
const postcssOrganizerPlugin = require('postcss-organizer');

let config = null;

if (argv.preset) {
  const { presets } = postcssOrganizerPlugin;
  if (!presets.includes(argv.preset)) {
    console.error(`Unknown preset "${argv.preset}". Available presets are ${presets.join(', ')}.`);
    process.exit(1);
  }

  config = { preset: argv.preset };
} else {
  const seekout = require('seekout');
  const cfgpath = seekout(CONFIG);

  config = cfgpath ? require(cfgpath) : null;
}

const fg = require('fast-glob');
const fs = require('fs');
const util = require('util');
const formatError = require('./format-error');

const pcss = postcss([postcssOrganizerPlugin(config)]);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const stream = fg.stream(argv._, { absolute: true });

stream
  .on('data', abspath => readFile(abspath, 'utf8')
    .then(data => pcss.process(data, { from: abspath, to: abspath }))
    .then(result => writeFile(abspath, result.css, 'utf8'))
    .catch(error => {
      console.log(formatError(error));
      process.exit(1);
    }))
  .once('error', error => {
    console.log(formatError(error));
    process.exit(1);
  });
