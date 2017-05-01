/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */
/*jshint -W030 */

module.exports = function runAll() {

    var dropFK = require('../db/dropFK.js');
    var dropData = require('../db/dropData.js');
    var calls = require('./calls.js');
    var createFK = require('../db/createFK.js');
    var createData = require('../db/createData.js');

    dropFK();

    setTimeout(function() {
        dropData();
    }, 1000);


    setTimeout(function() {
        calls.employees();
        calls.chargebands();
        calls.clients();
        calls.clientNames();
        calls.projects();
        calls.jobDetails();
        calls.jobs();
        calls.tasks();
        calls.entries();
        calls.allocations();
    }, 3000);


    setTimeout(function() {
        createFK();
    }, 300000);

    setTimeout(function() {
        createData();
    }, 310000);
};