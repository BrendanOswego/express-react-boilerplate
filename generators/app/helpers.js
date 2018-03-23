const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');


class Validator {

  /**
   * @param  {Boolean} isDev checks if in dev mode or not, which disables
   * the helper log if given directory exists
   */
  constructor(isDev) {
    this.isDev = isDev;
  }


  /**
   * Validates whether or not the given prjoject directory is
   * can be used as root
   * @param  {String} parentDir parent directory where the project's root will be installed
   * @param  {String} projectDir project directory where project files will be installed
   * @returns {Promise} if the project directory exists in the file system
   */
  validate(parentDir, projectDir) {
    return new Promise(resolve => {
      fs.pathExists(path.resolve(parentDir, projectDir)).then(exists => {
        if (!this.isDev && exists)
          console.log(`\nDirectory ${chalk.yellow(projectDir)} already exists please use a different name.`); // eslint-disable-line no-console
        resolve(!exists);
      });
    });
  }
}

module.exports = {
  Validator
};
