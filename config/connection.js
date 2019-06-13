const mysql = require('mysql');



// heroku production
if (process.env.JAWSDB_URL) {
  con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // local testing
   con = mysql.createConnection({
    host: "localhost",
    database: 'burgers_db',
    user: "root",
    password: "happymarmot"
  });
}

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;
