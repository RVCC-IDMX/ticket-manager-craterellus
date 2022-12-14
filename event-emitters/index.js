const chalk = require('chalk');
const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const { log } = console;

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on('buy', (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on('error', (error) => {
  console.error(chalk.bgRed(`\n Gracefully handling our error: ${error}`));
});

log(chalk.yellow(`\n We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event`));
log(chalk.red(`\n We have ${ticketManager.listenerCount('error')} listener(s) for the error event`));

const onBuy = () => {
  log(chalk.bgGreen.bold('\n Thanks for your purchase! '));
};

ticketManager.on('buy', onBuy);

log(chalk.black.bgYellow(`\n We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount('buy')} `));
ticketManager.buy('test@email', 20);

ticketManager.off('buy', onBuy);

log(chalk.blue(`\n We now have: ${ticketManager.listenerCount('buy')} listener(s) for the buy event `));
ticketManager.buy('test@email', 20);

ticketManager.removeAllListeners('buy');
log(chalk.red.bgGreen(`\n We have ${ticketManager.listenerCount('buy')} listeners for the buy event `));
ticketManager.buy('test@email', 20);
log(chalk.yellow.bgRed('\n The last ticket was bought '));
