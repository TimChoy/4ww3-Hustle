"use strict";

const e = require('express');
const express = require('express');
const app = express.Router();
const db = require('../shared/mysql');

require('dotenv').config();

// Add user to database
app.post('/', async function (req, res) {
    let success = await db.addUser(req.body);
    if (!success) {
        res.status(400).end();
    } else {
        res.status(200).send('Successfully added user to database.');
    }
})

// Check if login credentials matches a user and return login credentials if so
app.post('/auth', async function (req, res) {
    let data = await db.authUser(req.body);
    if (!data) {
        // No match in database
        res.status(400).end();
    } else {
        // Match found
        var jsonData = JSON.stringify({
            userId: data.UserID,
            firstName: data.FirstName,
            lastName: data.LastName,
            email: data.Email
        });
        res.status(200).send(jsonData);
    }
});

module.exports = app;