var CryptoJS = require("crypto-js");
var mongoose = require('mongoose')
require('dotenv').config()

// var ciphertext = CryptoJS.AES.encrypt(process.env.MONGODB_URI, process.env.SECRET_HASH).toString();
// Decrypt MongoURI
var bytes  = CryptoJS.AES.decrypt(process.env.MONGODB_URI, process.env.SECRET_HASH);
var MongoDB_URI = bytes.toString(CryptoJS.enc.Utf8);

const mongooseconnection = async()=>{
    try {
await mongoose.connect(MongoDB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
  console.log("Connected successfully to mongodb")   
} catch (error) {
    console.log("Error while connecting to mongodb",error.message)
}
}
mongooseconnection()