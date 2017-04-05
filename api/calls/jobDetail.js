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
tl.jobs.allDetails(function(response, key, value) {
    var drop = connection.query('DELETE FROM jobDetail');

    var result = value;
    var arr1 = response.data.map(function(item) {
        return [item.id, item.dateCreated, item.description, item.name, item.jobTypeListItemId.id, item.accountManagerId, item.jobContactId];
    });

    var query = connection.query('INSERT INTO jobDetail(jobDetailId, dateCreated, jobDescription, jobName, fk_jobTypeListItemId, fk_jobOwnerID, fk_jobContactId) VALUES ?', [arr1],
        function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Imported to MySQL!");
                connection.end();
            }
        });

});