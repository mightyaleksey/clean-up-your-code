'use strict';

const chalk = require('chalk');
const path = require('path');

module.exports = function formatError(error) {
  if (error.name === 'CssSyntaxError') {
    const file = path.relative(process.cwd(), error.file);
    const location = `${error.line}:${error.column}`;
    const message = `
${chalk.bold.underline(file)}
${chalk.bold(location)} ${chalk.yellow(error.reason)}
`.trim();

    return message;
  }

  return error;
};
