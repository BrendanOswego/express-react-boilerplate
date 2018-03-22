const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

const validator = (rootDir, name) => {
  return new Promise(resolve => {
    fs.pathExists(path.resolve(rootDir, name)).then(exists => {
      if (exists)
        console.log(`\nDirectory ${chalk.yellow(name)} already exists please use a different name.`); // eslint-disable-line no-console
      resolve(!exists);
    });
  });
};

module.exports = {
  validator
};
