#!/usr/bin/env node
'use strict';

const { name, version } = require('../package');
process.title = name;

const USAGE = `
$ organize <file,glob> [options]

Options:
  -h, --help      print usage
  -v, --version   print version
`;

const minimist = require('minimist');
const argv = minimist(process.argv.slice(2), {
  alias: {
    help: 'h',
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

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const seekout = require('seekout');
const configpath = seekout('.cssorganizerrc.js');
const config = configpath ? require(configpath) : null;

const postcss = require('postcss');
const postcssOrganizerPlugin = require('postcss-organizer');
const css = postcss([postcssOrganizerPlugin(config)]);

const fg = require('fast-glob');
const stream = fg.stream(argv._, { absolute: true });

stream.on('data', abspath => readFile(abspath, 'utf8')
  .then(data => css.process(data, { from: abspath, to: abspath }))
  .then(result => writeFile(abspath, result.css, 'utf8')));
