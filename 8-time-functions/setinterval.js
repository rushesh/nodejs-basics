//Runs after specified time repetedly till stopped using clearInterval(timerID)
//Set Timeout returns a timer ID
//Use ctrl+c to exit
const myFunc = ()=>{
    console.log("This is a sample function")
}

const timerID = setInterval(myFunc,2000)

//We can use clearInterval by proiving the timer id as parameter
clearInterval(timerID)
//myFunc contents will not be printed

setInterval(()=>{
    console.log("This is from an anonymous function")
},1000)

const printUserDetails = (name,age)=>{
    console.log(`User details are : name - ${name}. Age - ${age}`)
}
//Pass arguments from setTimeOut function
setInterval(printUserDetails,1000,"Rohan",26)