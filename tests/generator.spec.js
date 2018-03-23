const path = require('path');
const rmdir = require('rmdir');
const fs = require('fs-extra');
const yt = require('yeoman-test');
const assert = require('yeoman-assert');

const { Validator } = require('../generators/app/helpers');

const validator = new Validator(true);

describe('generator creation tests', () => {

  /**
   * {String} Reference to the installed directory in the beforeAll function
   */
  let installDir;

  /**
   * Before all test cases are ran, create a temporary folder
   * where the project will be installed
   */
  beforeAll(() => {
    return yt.run(path.resolve(__dirname, '../generators/app'))
      .inTmpDir(dir => {
        installDir = dir;
        fs.copySync(path.join(__dirname, '../generators/app/templates'), dir);
      });
  });


  /**
   * After all test cases are ran, remove the temporary folder
   */
  afterAll(() => {
    rmdir(installDir);
  });

  it('should have copied template correctly', () => {
    assert.file(`${installDir}/src/client/index.js`);
    assert.file(`${installDir}/src/server/index.js`);
  });

  it('validates project was added to right directory', () => {
    validator.validate(installDir, 'src').then(emptyDir => {
      expect(emptyDir).toBe(false);
    });
  });

  it('validates directory as if in CLI', () => {
    validator.isDev = false;
    validator.validate(installDir, 'src').then(emptyDir => {
      expect(emptyDir).toBe(false);
    });
  });

});