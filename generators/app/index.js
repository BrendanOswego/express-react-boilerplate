const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

const { getDir, dirExists } = require('./helpers');
const finishPrompt = require('./finishPrompt');

const devMode = true;

module.exports = class extends Generator {

  prompting() {

    this.log(
      yosay(`Welcome to the ${chalk.red('generator-newr')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of this project?',
        default: 'generator-newr-default',
        validate: async input => {
          const exists = await dirExists(path.resolve(process.cwd(), input));
          if (exists)
            this.log(`\nDirectory ${chalk.yellow(input)} already exists please use a different name.`);
          return !exists;
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.props.baseDir = this.props.projectName;
    getDir(this.props.baseDir).then(dir => {
      this.destinationRoot(dir);
      this.log(`Set project root directory to ${chalk.blue.bold(dir)}`);

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          name: this.props.projectName
        }
      );

      this.fs.copy(
        this.templatePath('src'),
        this.destinationPath('src')
      );

      this.fs.copy(
        this.templatePath('configs'),
        this.destinationPath('configs')
      );

      this.fs.copy(
        this.templatePath('webpack'),
        this.destinationPath('webpack')
      );
    });
  }

  /**
   * If devMode is true, only run postinstall
   */
  install() {
    if (!devMode) {
      this.installDependencies({
        bower: false,
        node: true
      }).then(() => {
        finishPrompt(this.props.projectName);
      });
    } else {
      finishPrompt(this.props.projectName);
    }
  }
};
