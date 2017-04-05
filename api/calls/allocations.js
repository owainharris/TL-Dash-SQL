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
tl.allocations.allBlocks(function(response, key, value) {
    var drop = connection.query('TRUNCATE TABLE allocations');

    var result = value;
    var arr1 = response.data.map(function(item) {
        return [item.id, item.trafficEmployeeId];
    });

    var query = connection.query('INSERT INTO allocations(allocationId, fk_employeeId) VALUES ?', [arr1],
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Imported ALLOCATIONS to MySQL!");
                connection.end();
            }
        });

});