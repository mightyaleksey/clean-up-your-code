'use strict';

const {curry} = require('lodash/fp');

module.exports = curry((a , b) => a + b);
