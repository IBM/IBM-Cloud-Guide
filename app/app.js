const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const ejs = require('ejs');
const fs = require("fs");


//---------------- Configuration ----------
const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded())

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.use(express.static('./public', { maxAge: 24 * 60 * 60 * 100 }))

app.listen(3000, () => {
    console.log("Server started")
})
