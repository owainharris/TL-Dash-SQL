    // Declare dependencies
    const mysql = require("mysql");
    const TrafficLive = require('../lib/trafficLive.js');

    // Connection to MySQL
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ok',
        database: 'tl',
        connectionLimit: 15,
        queueLimit: 30,
        acquireTimeout: 1000000
    });


    // Decalre API Auth
    const tl = new TrafficLive({
        email: 'owainh2@gmail.com',
        token: 'VsrLCefrEBXgSCF7cOt5jNNGnGyAf2uVTtDoBQxG',
        pageSize: 500 //max 500
    });

    module.exports = function drop() {


        var dropEmployees = connection.query('TRUNCATE TABLE employees');
        var dropJobs = connection.query('TRUNCATE TABLE jobs');
        var dropProjects = connection.query('TRUNCATE TABLE projects');


        /*
    dropJobs = function(error) {
        var dropJobs = connection.query('TRUNCATE TABLE jobs');
        if (error) throw error;
        else {
            console.log("Dropped JOBS to MySQL!");
            //   connection.end();
        }
    };
    dropEmployees = function(error) {
        var dropProjects = connection.query('TRUNCATE TABLE projects');
        if (error) throw error;
        else {
            console.log("Dropped EMPLOYEES to MySQL!");
            //   connection.end();
        }
    };
*/
    };