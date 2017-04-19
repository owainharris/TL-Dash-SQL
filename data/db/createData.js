/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */
/*jshint -W030 */


const mysql = require("mysql");
var fs = require('fs');
var file1 = './data/json/jobs.json';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ok',
    database: 'tl'
});

module.exports = function createData() {

    connection.connect();

    connection.query('SELECT fk_trafficEmployeeID, firstName, lastName, costPerHour, hoursBillable, sum(minutes) as total_hours FROM entries JOIN employees on fk_trafficEmployeeID = employees.pk_userID GROUP BY fk_trafficEmployeeID, firstName, lastName', function(error, results, fields) {
        if (!error) {
            fs.writeFileSync(file1, JSON.stringify(results));
        } else {
            throw error;
        }
    });

    console.log("Queries saved to file" + '\n');

    connection.end();

};