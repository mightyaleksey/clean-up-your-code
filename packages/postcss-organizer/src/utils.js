'use strict';

exports.defaultTo = function defaultTo(value, defaultValue) {
  return value === null ? defaultValue : value;
};
