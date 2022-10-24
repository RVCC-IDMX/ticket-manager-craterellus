const chalk = require('chalk');

const { log } = console;

const TicketManager = require('./ticketManager');

const ticketManager = new TicketManager(10);

ticketManager.on('buy', () => {
  log(chalk.green('\n Someone bought a ticket!'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);

ticketManager.once('buy', () => {
  log(chalk.yellow('\nThis is only called once'));
});

ticketManager.buy('test@email.com', 20);
ticketManager.buy('test@email.com', 20);
