"use strict";
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
require('dotenv').config();

const bucketName = process.env.AWS_NAME;
const region = process.env.AWS_REGION;
const accessKey = process.env.AWS_ACCESS_KEY_ID;
const secretKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
    region,
    accessKey,
    secretKey
});

// uploads a file to s3
exports.uploadFile = function (file) {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    const result =  s3.upload(uploadParams).promise();
    return result;
}

// downloads a file from s3
exports.getFileStream = function (fileKey) {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    
    const result = s3.getObject(downloadParams).createReadStream()
    return result;
}