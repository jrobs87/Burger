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
        res.render("index", hbsObject);
    });
});

router.get('/api/allBurgers', function(req, res) {
    burger.all(table, function (result) {
        var hbsObject = {
            burgers: result
        };
        res.json(result);
    });
})

router.post('/api/addBurger', function (req, res) {
   const burger_name = req.body.burger_name;
    burger.add(table, burger_name); // calls add function from model
    // res.send('entered into the DB').status(200).end()
    res.redirect('/');
});

router.put('/api/updateBurger/:id', function (req, res) {
    let id = req.params.id
    console.log(id)
    burger.update(table, id, devoured, function(result){
        console.log(result)
    });
    res.send('updated')
    // res.send('eaten').status(200).end()
    // res.render("index");
   // NEED TO RE_RENDER PAGE AFTER UPDATE?????
});

module.exports = router;

