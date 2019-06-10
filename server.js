const express = require('express')
const app = express()
const port = 3000

const routes = require('./controllers/burgers_controller.js')
// const orm = require('./config/orm.js') // testing ORM
const burger = require('./models/burger'); // testing models

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);


// ----- BEGIN TESTING
// app.get('/', (req, res) => res.send('Hello World!'))

// TESTING ORM AND MODELS
// orm.selectAll('burgers');
// orm.insertOne('burgers', 'Bacon Cheese');
// orm.updateOne('burgers', 'Nom Burger', 'Bacon Cheese');
// burger.add('burgers', 'What A Burger');
// burger.update('burgers', 'Plain Burger', 'Good Burger');
// burger.all('burgers');

// ----- END TESTING

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

