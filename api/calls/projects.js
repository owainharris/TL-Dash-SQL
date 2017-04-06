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


module.exports = function projCall() {

    //Call TL API and write response to JSON
    tl.projects.all(function(response, key, value) {
        var drop = connection.query('TRUNCATE TABLE projects');

        var result = value;

        var arr1 = response.data.map(function(item) {
            return [item.id, item.name, item.clientCRMEntryId];
        });

        var query = connection.query('INSERT INTO projects(projectID, projectDescription, fk_clientID) VALUES ?', [arr1],
            function(error, results, fields) {
                if (error) throw error;
                else {
                    console.log("Imported PROJECTS to MySQL!");
                    connection.end();
                }
            });

    });

};