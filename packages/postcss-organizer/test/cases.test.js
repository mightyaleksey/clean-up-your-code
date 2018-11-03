'use strict';

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const util = require('util');

// pass cases names to run particular tests
const whiteList = [];

const postcssOrganizerPlugin = require('../src');
const readFile = util.promisify(fs.readFile);

const casesDir = path.resolve(__dirname, 'cases');
const cases = whiteList.length > 0 ? whiteList : fs.readdirSync(casesDir);

cases.forEach(caseName =>
  test(`case "${caseName}"`, async () => {
    const inputfile = path.join(casesDir, caseName, 'input.css');
    const input = await readFile(inputfile, 'utf8');
    const expectation = await readFile(path.join(casesDir, caseName, 'expectation.css'), 'utf8');
    const userOptions = require(path.join(casesDir, caseName, 'user-options'));

    const result = await postcss([postcssOrganizerPlugin(userOptions)])
      .process(input, { from: inputfile });

    expect(result.css).toBe(expectation);
  }));
