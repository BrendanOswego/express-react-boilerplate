/*eslint-disable no-console */
const chalk = require('chalk');

/**
 * Displays a list of helpful tips on getting started
 * with the project, post installation
 * @param  {String} projectName name of project
 */
const prompt = (projectName) => {
  console.log(`\n${chalk.blue('-------------------')}\n`);
  console.log(`Run the following commands to start project`);
  console.log(`${chalk.yellow(`cd ` + projectName)}`);
  console.log(`${chalk.yellow('npm run build')}`);
  console.log(`${chalk.yellow('npm start')}`);
  console.log(`\n${chalk.blue('-------------------')}\n`);
};

module.exports = prompt;