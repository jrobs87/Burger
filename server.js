const express = require('express')
const app = express()
const port = 3000

const routes = require('./controllers/burgers_controller.js')

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

