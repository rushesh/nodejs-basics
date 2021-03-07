// includes() method determines whether an array contains a specified element.
// This method returns true if the array contains the element, and false if not.
// includes() method is case sensitive

myarray = ["Rohan","rohan","shyam"]
console.log(myarray.includes("Rohan"))
console.log(myarray.includes("ROHAN"))
console.log(myarray.includes("Shyam"))

// indexOf() method searches the array for the specified item, and returns its position. CASE Sensitive
// The search will start at the specified position, or at the beginning if no start position is specified, 
// and end the search at the end of the array.
// Returns -1 if the item is not found.
// array.indexOf(item, start)

console.log(myarray.indexOf("Rohan"))
console.log(myarray.indexOf("ROHAN"))

// isArray() method determines whether an object is an array
console.log(Array.isArray(myarray))
console.log(Array.isArray("name"))
console.log(Array.isArray({name:"Rohan"}))

// join() method returns the array as a string
// elements will be separated by a specified separator. The default separator is comma (,)
// array.join(separator)

allnames = myarray.join(',')
console.log(allnames)

//lastIndexOf()  if not found -1
console.log(myarray.lastIndexOf("ROHAN"))
console.log(myarray.lastIndexOf("Rohan"))