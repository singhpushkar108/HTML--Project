const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', (channel) => {
  console.log(`Thanks for subscribing to ${channel}.`);
});

eventEmitter.emit('subscribe', 'college wallah');
