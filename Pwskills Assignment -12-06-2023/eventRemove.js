const EventEmitter = require('events');

const eventEmitter = new EventEmitter();


const eventHandler = () => {
  console.log('Event handler has been triggered!');
};

eventEmitter.on('subscribe', eventHandler);

eventEmitter.emit('subscribe');

eventEmitter.removeListener('subscribe', eventHandler);
eventEmitter.emit('subscribe');
