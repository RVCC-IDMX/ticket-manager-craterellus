const chalk = require('chalk');

const { log } = console;

class EmailService {
  send(email) {
    log(chalk.green.underline(`\nSending email to ${email}`));
  }
}

module.exports = EmailService;
