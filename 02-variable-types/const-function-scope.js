const a = 10
//will give error a=11

const arr1 = [1,2,3]
// will  also give error arr1 = b
//array can be modified by adding deleting elements
//array is also an object

// arr1 = [999,991,898] // Error

arr1.push(100)
console.log(arr1,typeof(arr1))

//same is case for objects
arr1[0]=999
console.log(arr1)
arr1[7] = 9919
console.log(arr1,arr1[6])

const customer = {
    name:"Rushesh",
    age:19
}
// not alowed error - customer = "Rushesh"
customer.age = 26
console.log(customer)

// We can freeze an array so that it cannot be modified
Object.freeze(arr1)
arr1[0]=1000
//arr[0]=1000 has no effect
//doesnot update
console.log(arr1)
//cannot push an element as it is not extensible
//arr1.push(100101)
// arr1.pop()
