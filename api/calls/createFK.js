/* jshint node: true, deve: true, browserify: true */
'use strict';

// Declare dependencies
const mysql = require("mysql");
const dateformat = require("dateformat");
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


module.exports = function createFK() {

    var dropChecks = connection.query('SET FOREIGN_KEY_CHECKS = 0;',
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Dropped FK Checking");
            }
        });

    var create_fkemp_fk = connection.query('alter table employees add constraint fkemp foreign key (pk_userID) references tl.entries (fk_trafficEmployeeID) ON UPDATE No Action',
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Created FK's for Entries");
            }
        });

    var create_fkjobtsk_fk = connection.query('alter table jobs add constraint fkjobtsk foreign key (jobID) references tl.tasks (fk_jobId) ON UPDATE No Action',
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Created FK's for Jobs");
            }
        });


    // Create Jobs Table ()
    var create_jobdet_fk = connection.query('alter table job_detail add constraint jobdet foreign key (jobDetailId) references tl.jobs (fk_jobDetailId) ON UPDATE No Action',
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Created FK's for Job Details");
            }
        });


    var create_cntprj_fk = connection.query('alter table clients add constraint cnt_prj foreign key (clientID) references tl.projects (fk_clientID) ON UPDATE No Action',
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Created FK's for Client Details");
            }
        });


    var create_clijob_fk = connection.query('alter table clientNames add constraint clijob foreign key (clientEmployeeID) references tl.job_detail (fk_jobContactId) ON UPDATE No Action',
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Created FK's for Client Details");
            }
        });

    var create_prjjobdet_fk = connection.query('alter table projects add constraint prjjobdet foreign key (projectID) references tl.job_detail (jobDetailId) ON UPDATE No Action',
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Created FK's for Project Details");
            }
        });


    var enableChecks = connection.query('SET FOREIGN_KEY_CHECKS = 1;',
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Started FK Checking");
            }
        });

};