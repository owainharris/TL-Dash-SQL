/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */

// Declare dependencies
const mysql = require("mysql");
const TrafficLive = require('../lib/trafficLive.js');

// Declare connection to MySQL
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


//Exports function below to runAll.js.
//module.exports = function empCall() {

//Call TL API from ../lib/trafficLive.js
tl.employees.find('isResource|EQ|false&filter=emailAddress|EQ|"owainh2@gmail.com"', (response, key) => {

    //Map the returend data to an array ( / 60 * 5 is deviding minutes to hours, multiplying days to a week.)
    let arr1 = response.data.map(item => [item.employeeDetails.id, item.active, item.employeeDetails.personalDetails.firstName, item.employeeDetails.personalDetails.lastName, item.employeeDetails.personalDetails.emailAddress, item.employeeDetails.costPerHour.amountString, item.employeeDetails.hoursWorkedPerDayMinutes / 60 * 5, item.employeeDetails.hoursWorkedPerDayBillableMinutes / 60 * 5]);

    //push array to MySQL
    let query = connection.query('INSERT IGNORE INTO employees(pk_userId, active, firstName, lastName, emailAddress, costPerHour, hoursWorked, hoursBillable) VALUES ?', [arr1],
        (error, results, fields) => {
            if (error) console.log(error);
            else {
                console.log("Imported " + arr1.length + " EMPLOYEES to MySQL!" + '\n');
            }
        });
});
//};