const http = require('http')
const PORT = process.env.PORT | 3001

const url = require('url');

const constServerHandler = (req,res)=>{
    fullUrl(req)
    res.write("Hello ! Welcome to NodeJS")
    res.end()
}

function fullUrl(req) {
    //URL Module
    console.log(req.url)
    // console.log(url.format({
    //   protocol: req.protocol,
    //   host: req.get('host'),
    //   pathname: req.originalUrl
    // }));
    
    let queryData = url.parse(req.url, true).query;
    console.log(queryData)
    let urlObject = url.parse(req.url, true);

    console.log(urlObject.host);			
    console.log(urlObject.pathname);		
    console.log(urlObject.search);		
    
    queryData = urlObject.query	

}

const server = http.createServer(constServerHandler);

const serverUPHandler = ()=>{
    console.log("Server is up and running : PORT : ",PORT)
}
server.listen(PORT,serverUPHandler)
