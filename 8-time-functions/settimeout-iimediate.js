//Runs only once after specified time 
//Set Timeout returns a timer ID

//SetImmediate
// SetImmediate method is used to break up long running operations and run a callback
// function immediately after the browser has completed other operations such as events and display updates.

console.log("File reading started")
setImmediate(()=>{
    console.log("This from 1 setImmediate")
})
const setImmediateTimerID = setImmediate(()=>{
    console.log("This from 2 setImmediate")
})
const myFunc = ()=>{
    console.log("This is a sample function")
}
const timerID = setTimeout(myFunc,2000)
//We can use ClearTimeout by proiving the timer id as parameter
clearTimeout(timerID)
//myFunc contents will not be printed

setTimeout(()=>{
    console.log("This is from an anonymous function")
    setImmediate(()=>{
        console.log("This from anonymous setImmediate")
        })
},1000)

const printUserDetails = (name,age)=>{
    console.log(`User details are : name - ${name}. Age - ${age}`)
    setImmediate(()=>{
        console.log("This from printUserDetails setImmediate")
        })
}
//Pass arguments from setTimeOut function
setTimeout(printUserDetails,1000,"Rohan",26)

setImmediate(()=>{
    console.log("This from last setImmediate")
})

clearImmediate(setImmediateTimerID)
console.log("File reading ended")