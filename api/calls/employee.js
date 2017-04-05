// Declare dependencies
const mysql = require("mysql");
const execSync = require('child_process').execSync;
const TrafficLive = require('../lib/trafficLive.js');
const fs = require('fs');
const employeeFile = '../data/employees.json';
const assert = require('assert');

// Connection to MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ok',
    database: 'tl'
});


// Decalre API Auth
const tl = new TrafficLive({
    email: 'owainh2@gmail.com',
    token: 'VsrLCefrEBXgSCF7cOt5jNNGnGyAf2uVTtDoBQxG',
    pageSize: 500 //max 500
});




//Call TL API and write response to JSON
tl.employees.find('isResource|EQ|false', function(response) {
    var alter1 = connection.query('ALTER TABLE entries DROP CONSTRAINT fk_trafficEmployeeID');
    // var alter2 = connection.query('ALTER TABLE entries CONSTRAINT fk_trafficEmployeeID');
    var drop = connection.query('DELETE FROM employees');

    fs.writeFile(employeeFile, JSON.stringify(response.data, function(key, value) {
            var result = value;

            var arr1 = response.data.map(function(item) {
                return [item.employeeDetails.id, item.active, item.employeeDetails.personalDetails.firstName, item.employeeDetails.personalDetails.lastName, item.employeeDetails.personalDetails.emailAddress, item.employeeDetails.costPerHour.amountString, item.employeeDetails.hoursWorkedPerDayBillableMinutes];
            });

            var query = connection.query('INSERT INTO employees(pk_userId, active, firstName, lastName, emailAddress, costPerHour, minsBillable) VALUES ?', [arr1],
                function(error, results, fields) {
                    if (error) throw error;
                });

            return result;
        },
        3, 'utf8'));
});