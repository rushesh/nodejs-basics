const {writeFile,readFile}  = require('fs')
const {promisify} = require('util')

const user = {
    name:"Ram",
    age:26,
    salary:25000.5050
}

const printUser = ({name,salary},{precision=2} = {})=>{
    console.log(name)
    console.log(salary.toFixed(precision));
}

printUser(user)

//REST operator
const { name,...details } = user
//Ram { age: 26, salary: 25000.505 }
console.log(name,details)

//if we assign than same reference is kept
user_copy = user
user.name="Shyam"
console.log(user,user_copy)

//user Spread operator to over come this
user.name = "Rohan"
user_copy_seperate ={
     ...user
}
user.name="Shyam"
console.log(user,user_copy_seperate)

