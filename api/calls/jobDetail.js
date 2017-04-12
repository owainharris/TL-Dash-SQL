/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */

// Declare dependencies
const mysql = require("mysql");
const TrafficLive = require('../lib/trafficLive.js');
const dateformat = require("dateformat");


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



module.exports = function jonDetailCall() {
    //Call TL API and write response to JSON
    tl.jobs.allDetails(function(response, key, value) {
        var drop = connection.query('DELETE FROM job_detail');

        var result = value;
        var arr1 = response.data.map(function(item) {
            return [item.id, dateformat(item.dateCreated, 'yyyy-mm-dd'), item.description, item.name, item.jobTypeListItemId.id, item.accountManagerId, item.jobContactId, item.ownerProjectId];
        });

        var query = connection.query('INSERT IGNORE INTO job_detail(jobDetailId, dateCreated, jobDescription, jobName, fk_jobTypeListItemId, fk_jobOwnerID, fk_jobContactId, fk_projectId) VALUES ?', [arr1],
            function(error, results, fields) {
                if (error) throw error;
                else {
                    console.log("Imported JOBDETAIL to MySQL!");
                    //    connection.end();
                }
            });

    });
};