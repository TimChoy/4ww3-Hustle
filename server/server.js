const express = require('express');
const cors = require('cors');
const parser = require('body-parser');

const users = require('./api/users');
const gyms = require('./api/gyms');
const reviews = require('./api/reviews');

const app = express();

require('dotenv').config();

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const globalRoute = process.env.ROUTE;

app.use(cors());
app.use(parser.json());

// app.get(globalRoute, function (req, res) {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.send(JSON.stringify({params: req.query.test}));
// });

app.use(globalRoute + '/users', users);
app.use(globalRoute + '/gyms', gyms);
app.use(globalRoute + '/reviews', reviews);

app.listen(port, hostname, function() {
    console.log('HTTP Listening on ' + port);
});