/*eslint-disable no-console */
const chalk = require('chalk');

module.exports = projectName => {
  console.log(`${chalk.blue('-------------------')}`);
  console.log(`Run the following commands to start project`);
  console.log(`${chalk.yellow(`cd ` + projectName)}`);
  console.log(`${chalk.yellow('npm install')}`);
  console.log(`${chalk.yellow('npm run build')}`);
  console.log(`${chalk.yellow('npm start')}`);
  console.log(`${chalk.blue('-------------------')}`);
};
