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

    connection.query('SELECT firstName, sum(minutes) as "Worked",(hoursWorked) AS "Expected Hours" FROM entries JOIN employees on fk_trafficEmployeeID = employees.pk_userID WHERE YEARWEEK(dateCreated) = YEARWEEK(NOW()) GROUP BY fk_trafficEmployeeID, firstName, lastName',
        function(error, results, fields) {
            if (!error) {
                // fs.writeFileSync('data/json/employees.json', JSON.stringify(results));
                csv.writeToPath("data/csv/timesheets.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });


    // SUM OF TIME ENTIRES AND SUM OF EXPECTED
    connection.query('SELECT "Hours Logged", sum(minutes) AS "value" FROM entries JOIN employees on fk_trafficEmployeeID = employees.pk_userID WHERE YEARWEEK(dateCreated) = YEARWEEK(NOW()) UNION SELECT "Expected Hours", SUM(hoursWorked) FROM entries JOIN employees on fk_trafficEmployeeID = employees.pk_userID WHERE YEARWEEK(dateCreated) = YEARWEEK(NOW())',
        function(error, results, fields) {
            if (!error) {
                csv.writeToPath("data/csv/timesheets_expected.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });

    // COUNT ALL TIMESHEETS
    connection.query('SELECT "Timesheets", COUNT(*) AS value FROM entries ORDER BY entrieId',
        function(error, results, fields) {
            if (!error) {
                csv.writeToPath("data/csv/timesheets_all.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });

    connection.query('SELECT DATE(earliestIntervalStart) as datetime, (COUNT(*)) AS count FROM allocations GROUP BY earliestIntervalStart',
        function(error, results, fields) {
            if (!error) {
                csv.writeToPath("data/csv/allocations.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });

    // COUNT JOBS IN PROGRESS
    connection.query('SELECT jobStateType, COUNT(*) AS value FROM jobs WHERE jobStateType = "PROGRESS";',
        function(error, results, fields) {
            if (!error) {
                csv.writeToPath("data/csv/jobs.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });

    // COUNT JOBS DEADLINE THIS MONTH
    connection.query('SELECT "Deadline Month", COUNT(internalDeadline) AS value FROM jobs WHERE MONTH(internalDeadline) = MONTH(CURDATE()) AND YEAR(internalDeadline) = YEAR(CURDATE()) ORDER BY internalDeadline',
        function(error, results, fields) {
            if (!error) {
                csv.writeToPath("data/csv/jobs_month.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });

    // COUNT JOBS DEADLINE THIS WEEK
    connection.query('SELECT "Deadline Week", COUNT(internalDeadline) AS value FROM jobs WHERE WEEK(internalDeadline) = WEEK(CURDATE()) AND YEAR(internalDeadline) = YEAR(CURDATE()) ORDER BY internalDeadline',
        function(error, results, fields) {
            if (!error) {
                csv.writeToPath("data/csv/jobs_week.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });



    console.log("Queries saved to file" + '\n');


    // ALL JOB DATA
    connection.query('SELECT jobNumber, jobStateType AS "State", DATE_FORMAT(internaldeadline,"%d/%m/%Y") AS "Internal Deadline", jobBillingStateType AS "Billing State", potentialValue AS "Potential", estimatedSellValue AS "Estimated", billedNet AS "Billed" FROM jobs WHERE jobStateType = "PROGRESS";',
        function(error, results, fields) {
            if (!error) {
                csv.writeToPath("data/csv/jobs_all.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });


    // ALL JOB DATA BY WEEK
    connection.query('SELECT jobNumber, jobStateType, DATE_FORMAT(internaldeadline,"%d/%m/%Y") AS "Internal Deadline", jobBillingStateType AS "Billing State", potentialValue AS "Potential", estimatedSellValue AS "Estimated", billedNet AS "Billed" FROM jobs WHERE jobStateType = "PROGRESS" AND WEEK(internalDeadline) = WEEK(CURDATE()) AND YEAR(internalDeadline) = YEAR(CURDATE());',
        function(error, results, fields) {
            if (!error) {
                csv.writeToPath("data/csv/jobs_all_week.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });

    // ALL JOB DATA BY MONTH
    connection.query('SELECT jobNumber, jobStateType, DATE_FORMAT(internaldeadline,"%d/%m/%Y") AS "Internal Deadline", jobBillingStateType AS "Billing State", potentialValue AS "Potential", estimatedSellValue AS "Estimated", billedNet AS "Billed" FROM jobs WHERE jobStateType = "PROGRESS" AND MONTH(internalDeadline) = MONTH(CURDATE()) AND YEAR(internalDeadline) = YEAR(CURDATE());',
        function(error, results, fields) {
            if (!error) {
                csv.writeToPath("data/csv/jobs_all_month.csv", results, { headers: true })
                    .on("finish", function() {
                        console.log("done!");
                    });
            } else {
                throw error;
            }
        });




    console.log("Queries saved to file" + '\n');



};