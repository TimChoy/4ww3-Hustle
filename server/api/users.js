"use strict";

const express = require('express');
const app = express.Router();
require('dotenv').config();
const db = require('../shared/mysql');

// Add user to database
app.post('/', function(req, res) {
    db.addUser(req.body, function(err) {
        if (err) {
            res.status(400).send('Bad request');
            return;
        }
        res.status(200).send('Successfully added user to database.');
    })
})

// Check if login credentials matches a user and return login credentials if so
app.post('/auth', function(req, res) {
    db.authUser(req.body, function(err, data) {
        // Error
        if (err) {
            res.status(400).send('Bad request');
            return;
        }
        // No match in database
        if (!data) {
            res.status(400).send('Unauthorized');
            return;
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
    })
});

module.exports = app;