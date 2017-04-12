/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */

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

module.exports = function clientsCall() {
    tl.clients.all(function(response, key, value) {
        var result = value;
        var arr1 = response.data.map(function(item) {
            return [item.id, item.name];
        });

        var query = connection.query('INSERT IGNORE INTO clients(clientID, clientName) VALUES ?', [arr1],
            function(error, results, fields) {
                if (error) throw error;
                else {
                    console.log("Imported CLIENTS to MySQL!");
                    //  connection.end();
                }
            });

    });

};