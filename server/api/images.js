"use strict";
const express = require('express');
const app = express.Router();
const multer = require('multer');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

const upload = multer({ dest: 'uploads/'});
const db = require('../shared/mysql');

const { uploadFile, getFileStream } = require('../shared/s3');

require('dotenv').config()

app.get('/:key', function (req, res) {
    const key = req.params.key;
    const readStream = getFileStream(key);

    readStream.pipe(res);
})

app.post('/', upload.single('image'), async function (req, res) {
    const file = req.file; 
    const result = await uploadFile(file);
    await unlinkFile(file.path);
    console.log(result);
    res.send({imagePath: `/images/${result.Key}`});
})

module.exports = app;

