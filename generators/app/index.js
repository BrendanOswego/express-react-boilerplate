const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const { Validator } = require('./helpers');
const finishPrompt = require('./finishPrompt');

const validator = new Validator(process.env.NODE_ENV === 'test');

class CustomGenerator extends Generator {

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
        validate: (name) => validator.validate(this.rootDir, name)
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const dir = this.props.projectName;
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

  install() {
    this.installDependencies({
      bower: false,
      node: true
    }).then(() => {
      finishPrompt(this.props.projectName);
    });
  }
}

module.exports = CustomGenerator;
