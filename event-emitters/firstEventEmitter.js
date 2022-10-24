const { EventEmitter } = require('events');

const firstEmitter = new EventEmitter();

firstEmitter.emit('\n My first event');
