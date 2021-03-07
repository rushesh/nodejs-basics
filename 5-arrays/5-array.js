// some() method checks if any of the elements in an array pass a test (provided as a function).
// The some() method executes the function once for each element present in the array:
// If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
// Otherwise it returns false

var num = [3, 10, 18, 20];
function checkGreaterThan10(x) {
  return x >= 10;
}
console.log(num.some(checkGreaterThan10))

//sort
//changes the original array
num.sort()
console.log(num)

num.sort((a,b)=>{
    return a-b
})
console.log(num)

num.sort((a,b)=>{
    return b-a
})
console.log(num)

// splice() method adds/removes items to/from an array, and returns the removed item(s).This method changes the original array.
// array.splice(index, howmany, item1, ....., itemX)
var num = [3, 10, 18, 20]
num.splice(1,2)
console.log(num)
var num = [3, 10, 18, 20]
num.splice(1,2,0,1,4)
console.log(num)

//toString() method returns a string with all the array values, separated by commas
console.log(num.toString())

//valueOf
//returns -  valueOf() method returns the array
v = num.valueOf()
console.log(v)

