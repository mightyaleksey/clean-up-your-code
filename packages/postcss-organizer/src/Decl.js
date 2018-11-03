'use strict';

const { defaultTo } = require('./utils');

class Decl {
  static of(...args) {
    return new Decl(...args);
  }

  constructor(spaceBeforeColon, spaceAfterColon) {
    this.spaceBeforeColon = spaceBeforeColon;
    this.spaceAfterColon = spaceAfterColon;
  }

  declBetween() {
    if (this.spaceBeforeColon === null || this.spaceAfterColon === null) {
      return null;
    }

    return `${this.spaceBeforeColon}:${this.spaceAfterColon}`;
  }

  raws(raws, before) {
    return {
      before: defaultTo(before, raws.before),
      between: defaultTo(this.declBetween(), raws.between),
    };
  }
}

module.exports = Decl;
