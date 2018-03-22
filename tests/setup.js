const Jasmine = require('jasmine');
const Reporter = require('jasmine-console-reporter');

const jasmine = new Jasmine();

jasmine.loadConfig({
  'spec_dir': 'tests',
  'spec_files': [
    '*.js'
  ],
  'stopSpecOnExpectationFailure': false,
  'random': false
});

jasmine.addReporter(new Reporter({
  colors: 1,
  cleanStack: 1,
  verbosity: 4,
  listStyle: 'indent',
  activity: false
}));

jasmine.onComplete(passed => {
  console.log(passed ? 'Passed' : 'Failed'); // eslint-disable-line no-console
});

jasmine.execute();
