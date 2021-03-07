arr1 = [1,2,3,4,5]
arr2 = [6,7,8,9,10]

console.log(arr1.length)
console.log(arr1[0])

// array1.concat(array2, array3, ..., arrayX)
arr3 = arr1.concat(arr2)
console.log(arr3)

// array.copyWithin(target, start*=0, end*=arr.length)
// The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
// This method will never add more items to the array.
// This method overwrites the original array.
arr2.copyWithin(1,4)
console.log(arr2)

// array.entries() returns an Array Iterator object with key/value pairs
let arr2_entry = arr2.entries()
console.log(arr2_entry)
for(x of arr2_entry){
    console.log(x)
}

// every() method checks if all elements in an array pass a test (provided as a function).

// The every() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// If no false occur, every() returns true

const myFuncEven = (x)=>{
    return x%2==0
}
const arr4 = [2,4,6,8]
console.log(arr1.every(myFuncEven))
console.log(arr4.every(myFuncEven))

// fill() method fills the specified elements in an array with a static value.
// Can specify the position of where to start and end the filling. If not specified, all elements will be filled.
// Overwrites the original array
// array.fill(value, start*=0, end*=array.length)
arr4.fill(101,2,10)
console.log(arr4)