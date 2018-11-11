'use strict';

const child_process = require('child_process');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const util = require('util');

// pass cases names to run particular tests
const whiteList = [];

const postcssOrganizerPlugin = require('../src');
const exec = util.promisify(child_process.exec);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const casesDir = path.resolve(__dirname, 'cases');
const cases = whiteList.length > 0 ? whiteList : fs.readdirSync(casesDir);

cases.forEach(caseName =>
    test(`case "${caseName}"`, async () => {
      const inputfile = path.join(casesDir, caseName, 'input.css');
      const tmpfile = path.join(casesDir, caseName, 'tmp.css');
      const options = require(path.join(casesDir, caseName, 'options'));

      const input = await readFile(inputfile, 'utf8');
      await writeFile(tmpfile, input, 'utf8');
      const process = await exec(`../../../src/bin.js ${options.argv || ''} tmp.css`, {
        cwd: path.join(casesDir, caseName),
      });

      process.stdout.trim() && console.log(process.stdout);
      process.stderr.trim() && console.log(process.stderr);

      const expectation = await readFile(path.join(casesDir, caseName, 'expectation.css'), 'utf8');
      const result = await readFile(tmpfile, 'utf8');

      expect(result).toBe(expectation);
    }));
