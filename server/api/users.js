const express = require('express');
const app = express.Router();
require('dotenv').config();

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(JSON.stringify({params: req.query.test}));
});

app.post('/', function (req, res) {
    let data = req.body;
    console.log(data);
    res.statusCode = 200;
    res.send('Success');
})

module.exports = app;