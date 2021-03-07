const { unlink, rename } = require('fs')
const { promisify } = require('util')

const makeDelete = promisify(unlink)
const makeRename = promisify(rename)

const filePathRename = "7-file-system\\sample3.txt"
const filePathDelete = "7-file-system\\sample2.txt"

const newFileName = "7-file-system\\Sample_Renamed.txt"

const renameFile = async(filePathRename,newFileName)=>{
    try {
        await makeRename(filePathRename,newFileName)
        console.log("Rename Success")
    } catch (error) {
        console.log("Error while renaming",error.message)
    }
}
renameFile(filePathRename,newFileName)

const deleteFile = async(filePathDelete)=>{
    try {
        await makeDelete(filePathDelete)
        console.log("Delete Success")
    } catch (error) {
        console.log("Error while Deleting",error.message)
    }
}
deleteFile(filePathDelete)