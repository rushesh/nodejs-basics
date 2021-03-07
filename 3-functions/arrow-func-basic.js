const sum = (a,b)=>{
    return a+b
}

//if returning one line use
const diff = (a,b)=>a-b
//if one parameter can be passed as
const powoftwo = x => x**2
//if one parameter than this is also valid
const powofthree = (y)=>y**3

const myName = ()=> 
{
    return "Shyam"
}

console.log(sum(1,2))
console.log(diff(2,4))
console.log(powoftwo(4))
console.log(powofthree(2))
console.log(myName())