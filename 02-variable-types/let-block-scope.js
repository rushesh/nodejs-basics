//Let follows a block scope
//first should be declared
let a = 2
// let a = 3 
//Error a has been already defined
{
    let name = "Ram"
    console.log("a,name : ",a,name)
    //This is a block
}
for(let i=0;i<2;i++){
    //This is a block scope
    console.log(`i - ${i}`)
}
//Not able to access let variable out of block scope
//console.log(`i - ${i}`)