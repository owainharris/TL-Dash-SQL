// Declare dependencies
var mysql = require("mysql");
var dateformat = require("dateformat");
var TrafficLive = require('../lib/trafficLive.js');

// Connection to MySQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ok',
    database: 'tl'
});



// Decalre API Auth
var tl = new TrafficLive({
    email: 'owainh2@gmail.com',
    token: 'VsrLCefrEBXgSCF7cOt5jNNGnGyAf2uVTtDoBQxG',
    pageSize: 500 //max 500
});


//module.exports = function dropFK() {

var query1 = connection.query('alter table employees drop foreign key fkemp',
    function(error, results, fields) {
        if (error) throw error;
        else {
            console.log("Dropped FK's from Entries");
            //     connection.end();
        }
    });

var query2 = connection.query('alter table jobs drop foreign key fkjobtsk',
    function(error, results, fields) {
        if (error) throw error;
        else {
            console.log("Dropped FK's from Jobs");
            //     connection.end();
        }
    });

var query3 = connection.query('alter table job_detail drop foreign key jobdet',
    function(error, results, fields) {
        if (error) throw error;
        else {
            console.log("Dropped FK's from Job Details");
            //     connection.end();
        }
    });

var query4 = connection.query('alter table clients drop foreign key cnt_prj',
    function(error, results, fields) {
        if (error) throw error;
        else {
            console.log("Dropped FK's from Clients");
            //     connection.end();
        }
    });

var query5 = connection.query('alter table clientNames drop foreign key clijob',
    function(error, results, fields) {
        if (error) throw error;
        else {
            console.log("Dropped FK's from Client Names");
            //     connection.end();
        }
    });

var query6 = connection.query('alter table projects drop foreign key prjjobdet',
    function(error, results, fields) {
        if (error) throw error;
        else {
            console.log("Dropped FK's from Client Names");
            //     connection.end();
        }
    });


var query7 = connection.query('alter table employees drop foreign key emp_job_detail',
    function(error, results, fields) {
        if (error) throw error;
        else {
            console.log("Dropped FK's from Employees");
            //     connection.end();
        }
    });

//};