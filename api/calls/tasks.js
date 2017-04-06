// Declare dependencies
const mysql = require("mysql");
const execSync = require('child_process').execSync;
const TrafficLive = require('../lib/trafficLive.js');
const fs = require('fs');
const employeeFile = '../data/tasks.json';
const assert = require('assert');


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



//Call TL API and write response to JSON
tl.tasks.all(function(response, key, value) {
    var drop = connection.query('TRUNCATE TABLE tasks');

    var result = value;

    var arr1 = response.data.map(function(item) {
        return [item.id, item.quantity, item.durationMinutes, item.totalTimeLoggedMinutes, item.totalTimeLoggedBillableMinutes, item.cost.amountString, item.rate.amountString, item.complete, item.jobId];
    });

    var query = connection.query('INSERT INTO tasks(taskId, qty, estMins, loggedMins, loggedBillableMins, estCost, estRate, complete, fk_jobId) VALUES ?', [arr1],
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Imported TASKS to MySQL!");
                connection.end();
            }
        });

});

//16839579