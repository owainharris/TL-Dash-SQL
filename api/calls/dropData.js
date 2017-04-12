/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */

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


module.exports = function dropData() {
    var dropChargebands = connection.query('DELETE FROM chargebands');
    var dropEntries = connection.query('DELETE FROM entries');
    var dropClients = connection.query('DELETE FROM clients');
    var dropNames = connection.query('DELETE FROM clientNames');
    var dropProjects = connection.query('DELETE FROM projects');
    var dropJobDetail = connection.query('DELETE FROM job_detail');
    var dropJobs = connection.query('DELETE FROM jobs');
    var dropTasks = connection.query('DELETE FROM tasks');
    var dropEmployees = connection.query('DELETE FROM employees');
};