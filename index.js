//importing custom module that we wrote
const logEvents = require('./logEvents');
//Events common core module
const EventEmitter = require('events');

//class has capitalization 
//directly from the docs
class MyEmitter extends EventEmitter { };

//initialize the object
//tutorial says it is confusing but the documentation sugests this that is why we are sticking to this.
//ref: https://www.youtube.com/watch?v=2vaTy4dkbJM&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=4
const myEmitter = new MyEmitter();

//add listener for log event
//name: log,  
myEmitter.on('log', (msg) => logEvents(msg));

//temporary to understand if this is working proerly
//delay of 2000
setTimeout(() => {
    //Emit event
    myEmitter.emit('log', 'Log event emitted');
}, 2000)
