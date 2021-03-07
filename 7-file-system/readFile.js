const { readFile,readFileSync,open } = require('fs')
const { promisify } = require('util')

const makeAsyncPromisify = promisify(readFile)
const makeOpenPromisify = promisify(open)
const filePathRead = "7-file-system\\sample1.txt"
//sync file read
try {
    const data = readFileSync(filePathRead,{encoding:"utf-8"})
    console.log("Data read sync : ",data)   
} catch (error) {
    console.log("Error while reading sync ")
}

//Async file read
const readFileAsync = async ()=>{
    try {
        const data = await makeAsyncPromisify(filePathRead,{encoding:'utf-8'})
        console.log("Data read Async : ",data)   
    } catch (error) {
        console.log("Error while reading ASYNC ")
    }
}
readFileAsync()

//Async file read
const openFileAsync = async ()=>{
    try {
        const data = await makeOpenPromisify(filePathRead,'r')
        console.log("Data read Async using OPEN : ",data)   
    } catch (error) {
        console.log("Error while reading ASYNC using OPEN ")
    }
}
openFileAsync()