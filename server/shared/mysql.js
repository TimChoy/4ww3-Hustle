"use strict";
const mysql = require('mysql');
require('dotenv').config();

// Private methods
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// query connects to the database and executes a SQL query
async function __query(actionAsync) {
    const connection = await new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            }
            resolve(connection);
        });
    });
    try {
        return await actionAsync(connection);
    } finally {
        connection.release();
    }
}

// getMaxID returns the max id of a table
// returns the maximum id of the table, otherwise returns null
async function __getMaxID(tableName) {
    let id = tableName.slice(0, tableName.length - 1) + 'ID';
    let sql = `SELECT MAX(${id}) FROM ${tableName} LIMIT 1;`;
    const result = await __query(async connection => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, maxID) => {
                if (err) {
                    reject(null);
                };
                resolve(maxID);
            });
        }).then((maxID) => {
            return JSON.parse(JSON.stringify(maxID))[0][`MAX(${id})`];
        }).catch(() => {
            return null;
        });
    });
    return result;
}

// Public methods
// addUser takes user data and adds it to the User table in the database
// returns true if success and false if fails
exports.addUser = async function (data) {
    let maxID = await __getMaxID('Users');
    let sql = `INSERT INTO Users VALUES (${maxID + 1}, "${data.firstName}", "${data.lastName}", ` +
        `"${data.email}", "${data.password}");`;
    const result = await __query(async connection => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err) => {
                if (err) {
                    reject(false);
                };
                resolve(true);
            });
        }).then((res) => {
            return res;
        }).catch((res) => {
            return res;
        });
    });
    return result;
}

// authUser takes user data and compares it with the User table
// it returns user data if it finds a match
exports.authUser = async function (data) {
    let sql = `SELECT UserID, FirstName, LastName, Email FROM Users ` +
        `WHERE Email = "${data.email}" AND Pass = "${data.password}";`;
    const result = await __query(async connection => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, rows) => {
                if (err || rows.length == 0) {
                    reject([]);
                };
                resolve(rows);
            });
        }).then((res) => {
            return JSON.parse(JSON.stringify(res[0]));
        }).catch((err) => {
            return null;
        });
    });
    return result;
}

exports.getGyms = async function (lat, lng) {
    // Build query string
    let sql = `SELECT *`;
    // If latitude and longitude exist, restrict range
    if (lat && lng) {
        sql += `, (3959 * acos( cos(radians(${lat})) * cos(radians(Latitude)) * cos(radians(Longitude) - ` +
            `radians(${lng})) + sin(radians(${lat})) * sin(radians(Latitude)))) AS Distance FROM Gyms ` +
            `HAVING Distance < 30 ORDER BY Distance;`;
    } else {
        sql += ` FROM Gyms;`;
    }
    const result = await __query(async connection => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, rows) => {
                if (err) {
                    reject(null);
                };
                resolve(rows);
            });
        }).then((rows) => {
            return JSON.parse(JSON.stringify(rows));
        }).catch(() => {
            return null;
        });
    });
    return result;
}

// addGym takes gym data and adds it to the database
// returns true if successful, else false
exports.addGym = async function (data) {
    let maxID = await __getMaxID('Gyms');
    let sql = `INSERT INTO Gyms VALUES (${maxID + 1}, "${data.gymName}", "${data.description}", ` +
        `"${data.lat}", "${data.lng}", "${data.path}");`;
    const result = await __query(async connection => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err) => {
                if (err) {
                    reject(false);
                };
                resolve(true);
            });
        }).then((res) => {
            return res;
        }).catch((res) => {
            return res;
        });
    });
    return result;
}

// addReview adds a review to the database
// returns true if successful, else returns false
exports.addReview = async function (data) {
    let maxID = await __getMaxID('Reviews');
    let sql = `INSERT INTO Reviews VALUES (${maxID + 1}, "${data.review}", "${data.rating}", ` +
        `"${data.gymID}", "${data.userID}");`;
    const result = await __query(async connection => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err) => {
                if (err) {
                    reject(false);
                };
                resolve(true);
            });
        }).then((res) => {
            return res;
        }).catch((res) => {
            return res;
        });
    });
    return result;
}

// avgRating gets the average rating of a given gym
// returns a decimal representing the average rating, or null if error
exports.avgRating = async function (gymID) {
    let sql = `SELECT AVG(Rating) FROM Reviews WHERE GymID=${gymID};`;
    const result = await __query(async connection => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, avg) => {
                if (err || !avg) {
                    reject(null);
                };
                resolve(avg);
            });
        }).then((res) => {
            return res;
        }).catch(() => {
            return null;
        });
    });
    return result;
}

// listRatings gets the list of ratings of a given gym
// returns an array of review objects, else returns null if errors
exports.listRatings = async function (gymID) {
    let sql = `SELECT * FROM Reviews WHERE GymID=${gymID};`;
    const result = await __query(async connection => {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, ratings) => {
                if (err || !ratings) {
                    reject(null);
                };
                resolve(ratings);
            });
        }).then((res) => {
            return res;
        }).catch(() => {
            return null;
        });
    });
    return result;
}