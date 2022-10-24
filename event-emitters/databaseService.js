const chalk = require('chalk');

const { log } = console;

class DatabaseService {
  save(this.email, price, timestamp) {
    log(chalk.yellow.bgBlue(`\n Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})`));
  }
}

module.exports = DatabaseService;
