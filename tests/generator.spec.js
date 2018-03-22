const path = require('path');
const rmdir = require('rmdir');
const fs = require('fs-extra');
const yt = require('yeoman-test');
const assert = require('yeoman-assert');

const { validator } = require('../generators/app/helpers');

describe('generator creation tests', () => {

  let installDir;

  beforeEach(() => {
    return yt.run(path.resolve(__dirname, '../generators/app'))
      .inTmpDir(dir => {
        installDir = dir;
        fs.copySync(path.join(__dirname, '../generators/app/templates'), dir);
      });
  });

  afterEach(() => {
    rmdir(installDir);
  });

  it('generates temp project', () => {
    assert.file(`${installDir}/src/client/index.js`);
  });

  it('validates project was added to right directory', () => {
    validator(installDir, 'src').then(emptyDir => {
      expect(emptyDir).toBe(false);
    });
  });

});