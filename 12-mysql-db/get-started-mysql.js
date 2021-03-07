var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'sa',
    password : 'password',
    database:'master',
    port:'1433',
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000
});
//to use sql string to connect
// var connection = mysql.createConnection('mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');
var connection = connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

    connection.query('SELECT 1', function (error, results, fields) {
    if (error) throw error;
    // connected!
  });

  connection.end((err)=> {
    // The connection is terminated now
  });