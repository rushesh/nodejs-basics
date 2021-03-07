const name = "Ram"
const age = 27

this.user = {
    name,
    age,
    email:"ram@xyz.com"
}

const myFunc1 = function(){
    console.log(this,{depth:0})
    //this here referes to the function myFunc1()
    //this here is the caller of myFunc1 
    console.log(this.user)
    //cannot refer this.user
}

const myFunc2 = ()=>{
    console.log(this)
    //can refer this.user
    //"this" here is NOT the caller of myFunc2
    //It's the same "this" found in myFunc2's scope
}

myFunc1()
myFunc2()