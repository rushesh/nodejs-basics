const arr4 = [21,41,6,8,10,22,23]
const arr5 = [1,3,5,7,9]
const myFuncEven = (currentElemet)=>{
    return currentElemet%2==0
}
const twiceHandler = (currentElemet,indexValue,arrayname)=>{
    arrayname[indexValue] = 2*currentElemet
}
const twiceHandlerMap = (currentElemet)=>{
    return 2*currentElemet
}
// filter() method creates an array filled with all array elements that pass a test

res = arr4.filter(myFuncEven)
console.log(res)

// find() method returns the value of the first element in an array that pass a test (provided as a function).
// The find() method executes the function once for each element present in the array:
// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined

console.log(arr4.find(myFuncEven))
console.log(arr5.find(myFuncEven))

// findIndex() method returns the index of the first element in an array that pass a test (provided as a function).

// The findIndex() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
// Otherwise it returns -1


console.log(arr4.findIndex(myFuncEven))
console.log(arr5.findIndex(myFuncEven))

// forEach() method calls a function once for each element in an array, in order
//doesnot return a new array, returns undefined
console.log(arr5)
xx = arr5.forEach(twiceHandler)
console.log("From foreach return : ",xx)

console.log(arr5)

// Array.from() method returns an Array object from any object with a length property or an iterable object
name = "Rohan"
myArr = Array.from(name)
console.log(myArr)

//map - method creates a new array with the results of calling a function for every array element
//returns a new array
num = [1,2,3]
x = num.map(Math.sqrt)
y = num.map(twiceHandlerMap)
console.log(x,y)

// pop() method removes the last element of an array, and returns that element

console.log(x.pop(),x)

// to remove the first element of an array, use the shift() method
console.log(y.shift(),y)

// push() method adds new items to the end of an array, and returns the new length.

console.log(x.push(100),x)

// To add items at the beginning of an array, use the unshift() method

console.log(y.unshift(100),y)
