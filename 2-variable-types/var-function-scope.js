// var is default
// if a variable type is not mentioned it is var by fefault
//whole is wrapped under a single function main()

"use strict"
{
    var age = 30
}
console.log("Age is : ",age)
var a = 1
function multiply(a,b){
    //This is a function scope
    console.log("a",a)
    //a here is accessing parameter a
    return a*b;

}
multiply(4,8)

//variable declared without type is var
//can be accessed before declaration
//default value is undefined
console.log("name : ",name)
var name
console.log("name : ",name)
name = "Ram"
console.log("name : ",name)

for(var j =0;j<2;j++){
    console.log("j : - ",j)
}
console.log("outside j : - ",j)