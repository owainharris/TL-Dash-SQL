var express = require('express');
var router = express.Router();
var mysql = require("mysql");
//var runAll = require('../data/api/runAll.js');
//var drop = require('../api/calls/drop.js');

//setTimeout(function() {
//    runAll();
//}, 1000);


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




router.get('/employeelist', function(req, res) {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ok',
        database: 'tl'
    });


    var sorter = 'active';
    var sql = 'SELECT * from employees ORDER BY ' + connection.escapeId(sorter);
    //connection.connect();

    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        res.render('employeelist', { title: 'employeelist', rows: rows });
    });
    //connection.end();
});


//Display Client List

router.get('/clientlist', function(req, res) {

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
        res.render('clientlist', { title: 'clientlist', rows: rows });
    });
    //connection.end();
});


//Display test List

router.get('/test', function(req, res) {
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
        res.render('test', { title: 'test', rows: rows });
    });
    //connection.end();

});



module.exports = router;