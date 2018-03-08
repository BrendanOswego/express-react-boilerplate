const path = require('path');

const report = process.env.NODE_ENV == 'report';

const coverageReporters = [];
coverageReporters.push('text');
if (report)
  coverageReporters.push('lcov');

const config = {
  rootDir: path.resolve(process.cwd()),
  setupFiles: [
    '<rootDir>/configs/enzyme.config.js'
  ],
  coveragePathIgnorePatterns: [
    'configs'
  ],
  testRegex: '(/tests/.*|(\\.|/)(spec))\\.jsx?$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|eot|otf|svg|ttf)$':
      '<rootDir>/configs/mock',
    '\\.scss': 'identity-obj-proxy'
  },
  coverageReporters,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
};

module.exports = config;
