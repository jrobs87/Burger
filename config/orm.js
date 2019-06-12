// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

const con = require("./connection.js");
const orm = {

    // get all burgers
    selectAll: function (table, cb) {
        var queryString = `SELECT * FROM ${table}`;
        con.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result); 

        });
    },

    // add one burger
    insertOne: function (table, burger_name) {
        let queryString = `INSERT INTO ${table} (burger_name, devoured) VALUES ("${burger_name}", "0")`;
        console.log(queryString);
        con.query(queryString, function (err, result) {
            if (err) throw err;
            // console.log(result);
        });
        // console.log(queryString)
    },

    // updateOne: function (table, burger_new, burger_old) {
    //     let queryString = `UPDATE ${table} SET burger_name ='${burger_new}' WHERE burger_name = '${burger_old}'`;
    //     con.query(queryString, function (err, result) {
    //         if (err) throw err;
    //         // console.log(result);
    //     });

    //     // console.log(queryString)
    // }

    updateOne: function (table, id, devoured, cb) {
        let queryString = `UPDATE ${table} SET devoured ='${devoured}' WHERE id = '${id}'`;
        console.log(queryString)
        con.query(queryString, function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });

        // console.log(queryString)
    }


}

module.exports = orm;
