/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */
/*jshint -W030 */


const mysql = require("mysql");
var fs = require('fs');
var csv = require("fast-csv");


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ok',
    database: 'tl'
});

//module.exports = function createData() {

connection.connect();



connection.query('SELECT fk_trafficEmployeeID, firstName, lastName, costPerHour, hoursBillable, sum(minutes) as total_hours FROM entries JOIN employees on fk_trafficEmployeeID = employees.pk_userID GROUP BY fk_trafficEmployeeID, firstName, lastName', function(error, results, fields) {
    if (!error) {
        fs.writeFileSync('../json/employees.json', JSON.stringify(results));
        csv.writeToPath("../csv/employees.csv", results, { headers: true })
            .on("finish", function() {
                console.log("done!");
            });
    } else {
        throw error;
    }
});





console.log("Queries saved to file" + '\n');

connection.end();

//};