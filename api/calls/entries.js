// Declare dependencies
const mysql = require("mysql");
const execSync = require('child_process').execSync;
const TrafficLive = require('../lib/trafficLive.js');
const fs = require('fs');
const entriesFile = '../data/entries.json';
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
tl.entries.recent(function(response) {
    var drop = connection.query('DELETE FROM entries');

    fs.writeFile(entriesFile, JSON.stringify(response, function(key, value) {
            var result = value;

            var arr1 = response.data.map(function(item) {
                return [item.id, item.dateCreated, item.minutes, item.timeEntryCost.amountString, item.trafficEmployeeId.id];
            });

            var query = connection.query('INSERT INTO entries(entrieId, dateCreated, minutes, timeEntryCost, fk_trafficEmployeeID) VALUES ?', [arr1],
                function(error, results, fields) {
                    if (error) throw error;
                });

            return result;
        },
        3, 'utf8'));
});