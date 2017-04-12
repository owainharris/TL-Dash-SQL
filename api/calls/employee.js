/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */

// Declare dependencies
const mysql = require("mysql");
const TrafficLive = require('../lib/trafficLive.js');

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


module.exports = function empCall() {

    //Call TL API and write response to JSON
    tl.employees.find('isResource|EQ|false', function(response, key, value) {
        //var alter1 = connection.query('ALTER TABLE entries DROP CONSTRAINT fk_trafficEmployeeID');
        // var alter2 = connection.query('ALTER TABLE entries CONSTRAINT fk_trafficEmployeeID');
        // var drop = connection.query('DELETE FROM employees');
        var result = value;
        var arr1 = response.data.map(function(item) {
            return [item.employeeDetails.id, item.active, item.employeeDetails.personalDetails.firstName, item.employeeDetails.personalDetails.lastName, item.employeeDetails.personalDetails.emailAddress, item.employeeDetails.costPerHour.amountString, item.employeeDetails.hoursWorkedPerDayBillableMinutes / 60];
        });

        var query = connection.query('INSERT IGNORE INTO employees(pk_userId, active, firstName, lastName, emailAddress, costPerHour, minsBillable) VALUES ?', [arr1],
            function(error, results, fields) {
                if (error) console.log(error);
                else {
                    console.log("Imported EMPLOYEES to MySQL!");
                }
            });

        // var query2 = connection.query('UPDATE employees WHERE dateCreated=convert(datetime,convert(char(10),dateCreated,101)))// VALUES ?', [arr1],
        //     function(error, results, fields) {
        //         if (error) console.log(error);
        //        else {
        //            console.log("Imported EMPLOYEES to MySQL!");
        //       }
        //    });

        //  var query2 = connection.query('UPDATE employees SET ? WHERE ?', [arr1],
        //    function(err, rows) {
        //       if (err)
        //           console.log("Error Updating : %s ", err);
        //   });


    });
};