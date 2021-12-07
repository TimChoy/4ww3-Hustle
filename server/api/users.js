"use strict";

const express = require('express');
const app = express.Router();
require('dotenv').config();

app.post('/', function (req, res) {
    let data = req.body;
    console.log(data);
    res.statusCode = 200;
    res.send('Success');
});

module.exports = app;