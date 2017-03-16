'use strict';

const {
  curry, find,map,pick,
} = require('lodash');

const foo = curry((a, b) => find(pick(['a', 'b', 'c'], b), Boolean));

map({}, foo('as', 'b'));
