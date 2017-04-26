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

module.exports = function createData() {

    //connection.connect();



    connection.query('SELECT firstName, sum(minutes) as "Worked",(hoursWorked) AS "Expected Hours" FROM entries JOIN employees on fk_trafficEmployeeID = employees.pk_userID WHERE YEARWEEK(dateCreated) = YEARWEEK(NOW()) GROUP BY fk_trafficEmployeeID, firstName, lastName',
        function(error, results, fields) {
            if (!error) {
                fs.writeFileSync('data/json/employees.json', JSON.stringify(results));
                csv.writeToPath("data/csv/employees.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });


    console.log("Queries saved to file" + '\n');

    //connection.end();

};