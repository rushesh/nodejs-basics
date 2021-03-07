const name = "Ram"
const age = 27

const user = {
    name,
    age,
    email:"ram@xyz.com"
}

const myFunc1 = function(){
    console.log(this)
    //this here referes to the function myFunc1()
    //this here is the caller of myFunc1 
   
}

function myFunc3(){
    console.log(this)
}
const myFunc2 = ()=>{
    console.log(this)
    //"this" here is NOT the caller of myFunc2
    //It's the same "this" found in myFunc2's scope
}

myFunc1()
myFunc2()
myFunc3()