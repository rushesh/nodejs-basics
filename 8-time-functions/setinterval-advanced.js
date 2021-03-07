console.log("Started reading file")
setImmediate(()=>{
    console.log("This is from first set immediate")
})
setTimeout(
    () => console.log('Will be printed after 1 second or not!'),
    1000,
  );
  
  for (let i = 0; i < 5; i++) {
    console.log("In for loop - i : ",i)
    //Block sync
  }
  
  setImmediate(()=>{
    console.log("This is from 2 set immediate")
})

let counter = 0

const myFunction = ()=>{
    console.log("Counter is : ",counter)
    if(counter === 2)
    {
        clearInterval(timerID)
    }
    counter+=1
}
const timerID = setInterval(myFunction,1)
setImmediate(()=>{
    console.log("This is from 3 set immediate")
})
console.log("Reached at end of file reading")
setImmediate(()=>{
    console.log("This is from last set immediate")
})