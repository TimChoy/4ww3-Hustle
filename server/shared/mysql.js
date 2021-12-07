"use strict";
var mysql = require('mysql');
require('dotenv').config();

var pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Private methods
// query connects to the database and executes a SQL query
function __query(sql, cb) {
    pool.getConnection(function(err, con) {
        if (err) {
            cb(true);
        } else {
            con.query(sql, function(err, res) {
                con.release();
                if (err) {
                    console.log(err);
                    cb(true);
                } else {
                    cb(false, res);
                }
            })
        }
    })
}

// getMaxID returns the max id of a table
function __getMaxID(tableName, cb) {
    var id = tableName.slice(0, tableName.length - 1) + 'ID';
    var sql = `SELECT MAX(${id}) FROM ${tableName} LIMIT 1;`;
    console.log(sql);
    __query(sql, function(err, maxID) {
        if (err) {
            console.log(err);
            cb(true);
        } else {
            maxID = JSON.parse(JSON.stringify(maxID))[0][`MAX(${id})`];
            cb(false, maxID);
        }
    })
}

// Public methods
// addUser takes user data and adds it to the User table in the database
exports.addUser = function(data, cb) {
    if (!data) cb(false);
    __getMaxID('Users', function(err, maxID) {
        var sql = `INSERT INTO Users VALUES (${maxID + 1}, "${data.firstName}", "${data.lastName}", ` +
            `"${data.email}", "${data.password}")`;
        
        __query(sql, function(err) {
            if (err) {
                console.log(err);
                cb(true);
            } else {
                cb(false);
            }
        })
    })
    
};

// authUser takes user data and compares it with the User table
// it returns user data if it finds a match
exports.authUser = function(data, cb) {
    if (!data) cb(false);

    var sql = `SELECT UserID, FirstName, LastName, Email FROM Users ` +
        `WHERE Email = "${data.email}" AND Pass = "${data.password}"`;

    __query(sql, function(err, userData) {
        if (err) {
            console.log(err);
            cb(true);
        } else {
            userData = JSON.parse(JSON.stringify(userData));
            cb(false, userData.slice(-1)[0]);
        }
    })
}