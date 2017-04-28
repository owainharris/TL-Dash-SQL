var express = require('express');
var router = express.Router();
var mysql = require("mysql");


var runAll = require('../data/api/runAll.js');
setTimeout(function() {
    runAll();
}, 5000);


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome to trafficLIVE Dash' });
});

router.get('/timesheets', function(req, res, next) {
    res.render('timesheets');
});

router.get('/timesheets_expected', function(req, res, next) {
    res.render('timesheets_expected');
});

router.get('/jobs_all', function(req, res, next) {
    res.render('jobs_all');
});

router.get('/jobs_all_months', function(req, res, next) {
    res.render('jobs_all_months');
});

router.get('/jobs_all_weeks', function(req, res, next) {
    res.render('jobs_all_weeks');
});

router.get('/job_gauges', function(req, res, next) {
    res.render('job_gauges');
});

module.exports = router;