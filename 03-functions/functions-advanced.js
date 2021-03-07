//arguments valid for function syntax only
function myFunction(){
    console.log(arguments)
    // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
}

myFunction(1,2,3,4,5)

//to pass n variable arguments use ... rest operator
function myFunction2(...params){
    console.log(params)
    // [ 1, 2, 3, 4, 5 ]
}
myFunction2(1,2,3,4,5)

//works with both arrow and normal function syntax
const arrowFunction = (...params)=>{
    console.log(params)
    // [ 1, 2, 3, 4, 5 ]
}
arrowFunction(1,2,3,4,5)

const arrowFunction2 = (a,b,...params)=>{
    //fist 2 will be a and b and are params array
    console.log(a,b,params)
}
arrowFunction2(1,2,3,4,5)
arrowFunction2(1,2)
arrowFunction2(1)

// 1 2 [ 3, 4, 5 ]
// 1 2 []
// 1 undefined []
