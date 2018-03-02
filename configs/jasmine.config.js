require('ignore-styles');
const Jasmine = require('jasmine');
const Reporter = require('jasmine-console-reporter');
const setup = require('./setupDOM');

const jasmine = new Jasmine();

jasmine.loadConfig({
  'spec_dir': 'tests',
  'spec_files': [
    '**/*.spec.js',
    '**/*.spec.jsx'
  ]
});

jasmine.addReporter(new Reporter({
  colors: 1,
  cleanStack: 1,
  verbosity: 4,
  listStyle: 'indent',
  activity: false
}));

setup();

jasmine.onComplete(passed => {
  console.log(passed ? 'tests passed' : 'tests failed'); // eslint-disable-line no-console
});

jasmine.execute();
