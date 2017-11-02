const Emitter = require('events');
const eventConfig = require('./config').events;

const emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');

