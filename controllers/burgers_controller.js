const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

const table = 'burgers'; // burgers table
const devoured = 1; // devoured true

router.get('/', function (req, res) {
    burger.all(table, function (result) {
        var hbsObject = {
            burgers: result
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/api/addBurger', function (req, res) {
    burger_name = req.body.burger_name;
    burger.add(table, burger_name); // calls add function from model
    console.log(`Inserted '${burger_name}' into db!`);
});

router.put('/api/updateBurger', function (req, res) {
    console.log(req.body);
    let id = req.body.burger_id;
    burger.update(table, id, devoured);
    // res.render("index");
   // NEED TO RE_RENDER PAGE AFTER UPDATE?????
});

module.exports = router;

