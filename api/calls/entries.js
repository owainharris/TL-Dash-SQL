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




//Call TL API and write response to JSON
tl.entries.all(function(response, key, value) {
    //    var drop = connection.query('DELETE FROM entries');
    var result = value;
    var arr1 = response.data.map(function(item) {
        return [item.id, item.dateCreated, item.minutes, item.timeEntryCost.amountString, item.trafficEmployeeId.id];
    });
    var query = connection.query('INSERT INTO entries(entrieId, dateCreated, minutes, timeEntryCost, fk_trafficEmployeeID) VALUES ?', [arr1],
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Imported ENTRIES to MySQL!");
                connection.end();
            }
        });
});