/* jshint node: true, deve: true, browserify: true */
'use strict';

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


module.exports = function jobsCall() {
    // tl.jobs.find('jobStateType|EQ|"COMPLETE"', function(response) {
    //Call TL API and write response to JSON
    tl.jobs.all(function(response, key, value) {
        var drop = connection.query('TRUNCATE TABLE jobs');

        var result = value;

        var arr1 = response.data.map(function(item) {
            return [item.id, item.jobNumber, item.jobStateType, item.jobBillingStateType, item.potentialValue.amountString, item.estimatedSellValue.amountString, item.jobDetailId];
        });

        var query = connection.query('INSERT INTO jobs(jobID, jobNumber, jobStateType, jobBillingStateType, potentialValue, estimatedSellValue, fk_jobDetailId) VALUES ?', [arr1],
            function(error, results, fields) {
                if (error) throw error;
                else {
                    console.log("Imported JOBS to MySQL!");
                    connection.end();
                }
            });

    });

};