const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
app.use(cors());

app.get("/api", function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(JSON.stringify({params: req.query.test}));
});

app.listen(port, hostname, function() {
    console.log('HTTP Listening on ' + port);
});