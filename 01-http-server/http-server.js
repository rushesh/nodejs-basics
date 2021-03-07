const http = require('http')
const PORT = process.env.PORT | 3000
const constServerHandler = (req,res)=>{
    res.write("Hello ! Welcome to NodeJS")
    res.end()
}

const server = http.createServer(constServerHandler);

const serverUPHandler = ()=>{
    console.log("Server is up and running : PORT : ",PORT)
}
server.listen(PORT,serverUPHandler)
