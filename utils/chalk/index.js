const chalk = require("chalk");

chalk.error = (message) => {
  console.error(chalk.red(message));
};

chalk.log = (message) => {
  console.log(chalk.green(message));
};

chalk.success = (message) => {
  console.log(chalk.white.bgGreen.bold(message));
};

module.exports = chalk;
