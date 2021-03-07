const events = require('events')
const eventEmitter = new events.EventEmitter()


eventEmitter.on('event2',()=>{
    console.log("Event 2 called")
})
eventEmitter.emit('event2')

eventEmitter.on('event1',()=>{
    console.log("Event 1 called")
})
eventEmitter.on('event1',()=>{
    console.log("Event 1 called")
})
eventEmitter.on('event1',()=>{
    console.log("Event 1 called")
})


setTimeout(()=>{
    eventEmitter.emit('event1')
},2000)
