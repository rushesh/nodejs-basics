var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10, 
    host     : 'localhost',
    user     : 'username',
    password : 'password',
    database : 'databasename',
    port:'portnumber',
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000
});
 
pool.on('connection', function (connection) {
    console.log("Connection")
  });