const express = require('express')
const app = express()
const port = 3000

const orm = require('./config/orm.js')

app.get('/', (req, res) => res.send('Hello World!'))

orm.selectAll('burgers', 'id');
orm.insertOne('Bacon Cheese');
orm.updateOne('Nom Burger', 'Bacon Cheese')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

