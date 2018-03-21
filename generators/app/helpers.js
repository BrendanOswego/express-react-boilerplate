const fs = require('fs-extra');

/**
* Attempts to find an empty directory with props.baseDir as the default
* @param {String} dir directory to check if exists 
* @param {Number} index reference for recursion in the case that the dir is already taken
* @returns the directory that the generator will be using as root directory
*/
const getDir = (dir, index = 0) => {
  return new Promise(resolve => {
    fs.pathExists(dir).then(exists => {
      resolve(exists);
    });
  }).then(exists => {
    return exists ? this.getDir(this.props.baseDir + '_' + index, ++index) : dir;
  });
};

const dirExists = async (dir) => (
  fs.pathExists(dir)
);

module.exports = {
  getDir,
  dirExists
};
