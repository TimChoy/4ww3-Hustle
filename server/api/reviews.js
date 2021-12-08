"use strict";

const express = require('express');
const app = express.Router();
const db = require('../shared/mysql');
require('dotenv').config();

// Add a review
app.post('/add', async function (req, res) {
    let success = await db.addReview(req.body);
    if (!success) {
        res.status(400).end();
    } else {
        res.status(200).send('Successfully added review');
    }
})

// Sum all reviews of a gym and find average rating
app.post('/avg', async function (req, res) {
    let gymID = req.body.gymID;
    let avg = await db.avgRating(gymID);
    if (!avg) {
        // Failure or no match in database
        res.status(400).end();
    } else {
        res.status(200).send(avg);
    }
})

// Get all reviews of a specific gym by their gymID
// Query is very similar to sum of reviews
app.post('/', async function (req, res) {
    let gymID = req.body.gymID;
    let reviews = await db.listRatings(gymID);
    if (!reviews) {
        // Failure or no match
        res.status(400).end();
    } else {
        res.status(200).send(reviews);
    }
})

module.exports = app;