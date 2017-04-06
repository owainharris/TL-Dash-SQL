module.exports = function connectAPI() {
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
};