// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

var con = require("./connection.js");

const orm = {

    // get all burgers
    selectAll: function () {
        var queryString = "SELECT * FROM burgers ";
        con.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // add one burger
    insertOne: function (burger_name) {
        let queryString = `INSERT INTO burgers (burger_name,devoured) VALUES ("${burger_name}", "0")`;
        console.log(queryString);
        con.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        })

        console.log(queryString)
    },

    updateOne: function (burger_new, burger_old) {
        let queryString = `UPDATE burgers SET burger_name ='${burger_new}' WHERE burger_name = '${burger_old}'`;
        con.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        })

        console.log(queryString)
    }

}

module.exports = orm;
