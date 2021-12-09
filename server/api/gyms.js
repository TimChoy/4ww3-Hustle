"use strict";

const express = require('express');
const app = express.Router();
const db = require('../shared/mysql');

require('dotenv').config();

// Get list of gyms by distance and filters
app.post('/', async function (req, res) {
    let lat = req.body.lat;
    let lng = req.body.lng;
    let gymList = await db.getGyms(lat, lng);
    if (!gymList) {
        res.status(400).end();
    } else {
        res.status(200).send(JSON.stringify(gymList));
    }
});

// Add gym to database
app.post('/add', async function (req, res) {
    let success = await db.addGym(req.body);
    if (!success) {
        res.status(400).end();
    } else {
        res.status(200).send('Successfully added gym');
    }
});

module.exports = app;