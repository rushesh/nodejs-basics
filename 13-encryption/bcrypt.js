const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async(normalPwd)=>{
    let hashedPWD = null;
    try {
        hashedPWD = await bcrypt.hash(normalPwd, saltRounds)
        matchPassword(normalPwd,hashedPWD)
      } catch (error) {
        hashedPWD = null
    }finally{
        console.log("Hashed password : ",hashedPWD)
    }
}

hashPassword("cc^&aDio@e11")

const matchPassword = async(normalpwd,hashedpwd)=>{
    try {
        let match = await bcrypt.compare(normalpwd,hashedpwd)
        console.log("Matched : ",match)
    } catch (error) {
        console.log("Error")
    }
}