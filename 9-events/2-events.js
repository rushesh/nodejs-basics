const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

const myEventHandler = (...params)=>{
    console.log("Event handler called with params : ",params)
}
const myEventHandler2 = ()=>{
    console.log("Event handler 2 called")
}

//can be called with on | addListener
eventEmitter.on('log',myEventHandler)
eventEmitter.addListener('log',myEventHandler2)
//pass params to event emitter handler
eventEmitter.emit('log',1,2,3)
//event emitter handler with no params
eventEmitter.emit('log')
//remove eventhandler for function
console.log(eventEmitter.eventNames());

eventEmitter.removeListener('log', myEventHandler);
eventEmitter.emit('log')
//remove all listeners
eventEmitter.removeAllListeners();
eventEmitter.emit('log')

//Error handling using Event Listener
// eventEmitter.emit('error', new Error('Something bad happened'));
// eventEmitter.on('error',(err)=>{
//     console.log("Error ",err)
// })

