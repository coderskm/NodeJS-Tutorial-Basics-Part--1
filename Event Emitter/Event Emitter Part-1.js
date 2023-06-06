/*
1> EventEmitter's object has following methods :-
--> on - listens for an event
--> emit - emit an event
 */
const EventEmitter = require('events');

const customEmitter = new EventEmitter();
customEmitter.on('response', () => {
    console.log(`data recieved`);
})

customEmitter.emit('response');