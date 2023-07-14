const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('The default maximum number of event listeners are:', currentMaxListeners);

eventEmitter.setMaxListeners(5);

const newMaxListeners = eventEmitter.getMaxListeners();
console.log('The updated maximum number of event listeners:', newMaxListeners);
