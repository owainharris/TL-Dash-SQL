module.exports = function runAll() {

    var dropFK = require('./dropFK.js');
    var chargebandsCall = require('./chargebands.js');
    var projCall = require('./projects.js');
    var jobDetailCall = require('./jobDetail.js');
    var jobsCall = require('./jobs.js');
    var tasksCall = require('./tasks.js');
    var dropData = require('./dropData.js');
    var empCall = require('./employee.js');
    var entriesCall = require('./entries.js');
    var clientsCall = require('./clients.js');
    var clientNamesCall = require('./clientNames.js');
    var createFK = require('./createFK.js');

    dropFK();

    setTimeout(function() {
        dropData();
    }, 2000);


    setTimeout(function() {
        entriesCall();
        empCall();
        chargebandsCall();
        projCall();
        jobDetailCall();
        jobsCall();
        tasksCall();
        clientsCall();
        clientNamesCall();
    }, 3000);


    setTimeout(function() {
        createFK();
    }, 15000);
};