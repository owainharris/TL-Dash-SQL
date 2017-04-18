/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */


const mysql = require("mysql");
const calls = require('../api/testAPI.js');
//const connection = require('../db/connect.js');


// Connection to MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ok',
    database: 'tl'
});

var empArray = calls.employees();


function test() {
    setTimeout(function() {
        const query = connection.query('INSERT IGNORE INTO employees(pk_userId, active, firstName, lastName, emailAddress, costPerHour, hoursWorked, hoursBillable) VALUES ?', [empArray],
            (error, results, fields) => {
                if (error) console.log(error);
                else {
                    console.log("Imported " + empArray.length + " EMPLOYEES to MySQL!" + '\n');
                }
            });
    }, 5000);
}
test();