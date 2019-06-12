const mysql = require('mysql');

// local testing
var con = mysql.createConnection({
  host: "localhost",
  database: 'burgers_db',
  user: "root",
  password: "happymarmot"
});

// heroku production
// var con = mysql.createConnection({
//   hostname: 'us-mm-dca-ac764dab8c61.g5.cleardb.net',
//   username: 'AADDEC65834C599DBE0EB7919228B55A',
//   password: ,
//   database_name:  'burgersdbapp',
// });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
