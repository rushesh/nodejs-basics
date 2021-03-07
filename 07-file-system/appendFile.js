const { appendFileSync, appendFile } = require('fs')
const { promisify } = require('util')

const makeAsyncPromisify = promisify(appendFile)

const filePathAppend = "7-file-system\\sample1.txt"
const dataToAppend = "/nHope you are liking it."
//sync file Append
try {
    appendFileSync(filePathAppend,dataToAppend)
    console.log("Data Append sync success")   
} catch (error) {
    console.log("Error while Appending sync ")
}

//Async file Append
const appendFileAsync = async ()=>{
    try {
        await makeAsyncPromisify(filePathAppend,dataToAppend)
        console.log("Data append ASYNC success")     
    } catch (error) {
        console.log("Error append writing ASYNC ")
    }
}
appendFileAsync()