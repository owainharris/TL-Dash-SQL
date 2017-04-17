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