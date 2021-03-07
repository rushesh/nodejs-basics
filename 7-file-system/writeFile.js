const { writeFileSync, writeFile } = require('fs')
const { promisify } = require('util')

const makeAsyncPromisify = promisify(writeFile)

const filePathWrite = "7-file-system\\sample1.txt"
const dataToWrite = "/nHope you are liking it."
//sync file Write
try {
    writeFileSync(filePathWrite,dataToWrite)
    console.log("Data write sync success")   
} catch (error) {
    console.log("Error while writing sync ")
}

//Async file Write
const writeFileAsync = async ()=>{
    try {
        await makeAsyncPromisify(filePathWrite,dataToWrite)
        console.log("Data write ASYNC success")     
    } catch (error) {
        console.log("Error while writing ASYNC ")
    }
}
writeFileAsync()