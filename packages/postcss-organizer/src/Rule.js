'use strict';

const { defaultTo } = require('./utils');

class Rule {
  static of(...args) {
    return new Rule(...args);
  }

  constructor(alwaysSemicolon) {
    this.alwaysSemicolon = alwaysSemicolon;
  }

  raws(raws, before, between, after) {
    return {
      before: defaultTo(before, raws.before),
      between: defaultTo(between, raws.between),
      after: defaultTo(after, raws.after),
      semicolon: defaultTo(this.alwaysSemicolon, raws.semicolon),
    };
  }
}

module.exports = Rule;
