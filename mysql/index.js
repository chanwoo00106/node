var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host : '127.0.0.1',
  user : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DNAME,
  port: process.env.PORT
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();