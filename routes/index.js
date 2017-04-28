var express = require('express');
var router = express.Router();
var mysql = require("mysql");
//var runAll = require('../data/api/runAll.js');

//setInterval(function() {
//   runAll();
//}, 40000);


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome to trafficLIVE Dash' });
});

router.get('/joblist', function(req, res) {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ok',
        database: 'tl'
    });



    var sql = 'SELECT fk_trafficEmployeeID, firstName, lastName, costPerHour, minsBillable, sum(minutes) as total_hours FROM entries JOIN employees on fk_trafficEmployeeID = employees.pk_userID GROUP BY fk_trafficEmployeeID, firstName, lastName';
    //connection.connect();

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        res.render('joblist', { title: 'joslist', rows: rows });
    });
    //connection.end();
});






//Display test List

router.get('/timesheets', function(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ok',
        database: 'tl'
    });



    var sql = 'SELECT * from clients';
    //connection.connect();

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        res.render('timesheets', { title: 'timesheets', rows: rows });
    });
    //connection.end();

});



//Display test test2

router.get('/jobs_all_months', function(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ok',
        database: 'tl'
    });



    var sql = 'SELECT * from clients';
    //connection.connect();

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        res.render('jobs_all_months', { title: 'jobs_all_months', rows: rows });
    });
    //connection.end();

});

router.get('/jobs_all_weeks', function(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ok',
        database: 'tl'
    });



    var sql = 'SELECT * from clients';
    //connection.connect();

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        res.render('jobs_all_weeks', { title: 'jobs_all_weeks', rows: rows });
    });
    //connection.end();

});

router.get('/job_gauges', function(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ok',
        database: 'tl'
    });



    var sql = 'SELECT * from clients';
    //connection.connect();

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        res.render('job_gauges', { title: 'job_gauges', rows: rows });
    });
    //connection.end();

});

router.get('/jobs_all', function(req, res) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ok',
        database: 'tl'
    });



    var sql = 'SELECT * from clients';
    //connection.connect();

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        res.render('jobs_all', { title: 'jobs_all', rows: rows });
    });
    //connection.end();

});






module.exports = router;