console.log("In module 1-promise.js")
const sum = (a,b)=>{
    const sumPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2)
    })
    return sumPromise
}

const diff = (a,b)=>{
    const sumPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Custom Error")
        },2)
    })
    return sumPromise
}

//using then syntax
sum(1,2).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

const findDiff = diff(10,8)
findDiff.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

let description = "This is used to sum/diff"

//to export
module.exports = {
    sum,
    diff,
    description
}