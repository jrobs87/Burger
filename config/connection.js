const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: 'burgers_db',
  user: "root",
  password: "happymarmot"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
