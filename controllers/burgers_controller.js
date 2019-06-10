const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

const table = 'burgers'; // burgers table

// TESTING
const burger_name = 'testy burgs';
const burger_old = 'Royale with Chees';
const burger_new = 'ZIPPPY BURGER BRO';
// TESTING

router.get('/', function (req, res) {
    burger.all(table, function (result) {
        res.send(result);
    });
});

router.post('/api/addBurger', function (req, res) {
    burger.add(table, burger_name);
    res.send(`Inserted '${burger_name}' into db!`);
    console.log(`Inserted '${burger_name}' into db!`)
});

router.put('/api/updateBurger', function(req, res) {
    burger.update(table, burger_new, burger_old);
    res.send(`Changed ${burger_old} to ${burger_new}`);
    console.log(`Changed ${burger_old} to ${burger_new}`)
})

module.exports = router;

