// Declare dependencies
const mysql = require("mysql");
const execSync = require('child_process').execSync;
const TrafficLive = require('../lib/trafficLive.js');
const fs = require('fs');
const allocationsFile = '../data/allocations.json';
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

//Remove unwanted data
var onlyStringify = {
    allocationIntervals: true,
};


//Call TL API and write response to JSON
tl.allocations.recent(function(response) {
    var drop = connection.query('TRUNCATE TABLE jobs');

    fs.writeFile(allocationsFile, JSON.stringify(response.data, function(key, value) {
            var result = value;
            if (onlyStringify.hasOwnProperty(key)) {
                result = undefined;
            }
            var result = value;

            var arr1 = response.data.map(function(item) {
                return [item.jobId.id, item.durationInMinutes, item.trafficEmployeeId.id, item.earliestIntervalStart, item.latestIntervalEnd];
            });

            var query = connection.query('INSERT INTO allocations(durationInMinutes,jobID, trafficEmployeeId, earliestIntervalStart, latestIntervalEnd) VALUES ?', [arr1],
                function(error, results, fields) {
                    if (error) throw error;
                });

            return result;
        },
        3, 'utf8'));
});