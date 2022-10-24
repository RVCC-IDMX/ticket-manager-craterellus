const chalk = require('chalk');

const { log } = console;

// Basic colors
log(chalk.red('Wahahaha red'));
log(chalk.magenta('Meowmeowmeow meow-genta'));
log(chalk.yellow('Ring ring ring ring ring bananaphone'));

// Background colors
log(chalk.bgRed('Hello Hello testing red fred'));
log(chalk.bgGreen('It is not easy being green.'));

// Styling & decoration
log(chalk.bold('This is bold'));
log(chalk.underline('This is underlined'));

// Chaining
log(chalk.yellow.bgRed.underline('Yahoo!!!'));
