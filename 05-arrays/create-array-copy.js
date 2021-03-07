arr1 = [1,2,3,4,5,6,7,8,9]
//doesnot modify
arr2 = [...arr1]
//doesnot modify
arr3 = arr1.slice()
//modify
arr4 = arr1.valueOf()
//modify
arr5 = arr1.copyWithin()
arr1.push(100101)
arr1[0]=9999
console.log(`arr1 : ${arr1}\narr2 : ${arr2}\narr3 : ${arr3}\narr4 : ${arr4}\narr5 : ${arr5}`)