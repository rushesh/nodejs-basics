//REST operator
const arr1 = [0,1,2,3,4,5,6,7,8,9]
const [a,,b,,,c,d] = arr1
console.log(a,b,c)

const [zero,one,...numbers] = arr1
console.log(zero,one,numbers)

const arr2 = [arr1]
//Spread operator
const arr3 = [...arr1]
console.log(arr2,arr3)