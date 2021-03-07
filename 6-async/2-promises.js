const { sum,diff, description} = require('./1-promises')
console.log(description)
const callingSum = async()=>{
    try {
        const data = await sum(1,2)
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("SUM")
    }
}

const callingDiff = async()=>{
    try {
        const data = await diff(1,2)
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Diff")
    }
}
callingDiff()
callingSum()

exports.multiply = (a,b)=>{
    return a*b
}