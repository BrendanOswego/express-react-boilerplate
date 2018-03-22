const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
//const path = require('path');

const { validator } = require('./helpers');
const finishPrompt = require('./finishPrompt');

module.exports = class extends Generator {

  prompting() {

    this.log(
      yosay(`Welcome to the ${chalk.red('generator-newr')} generator!`)
    );

    this.rootDir = this.destinationRoot();

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of this project?',
        default: 'generator-newr-default',
        validate: (name) => validator(this.rootDir, name)
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const dir = this.props.projectName;
    if (process.env.NODE_ENV !== 'test')
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

    this.fs.copy(
      this.templatePath('configFiles'),
      this.destinationPath(this.destinationRoot())
    );

    this.fs.copy(
      this.templatePath('configFiles/.*'),
      this.destinationPath(this.destinationRoot())
    );

  }

  /**
   * If devMode is true, only run postinstall
   */
  install() {
    this.installDependencies({
      bower: false,
      node: true
    }).then(() => {
      finishPrompt(this.props.projectName);
    });
  }

};
