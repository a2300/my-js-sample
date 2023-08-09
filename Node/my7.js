const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

// Listen to the event
eventEmitter.on('myEvent', () => {
  console.log('Data received');
});

// Publish the event
eventEmitter.emit('myEvent');