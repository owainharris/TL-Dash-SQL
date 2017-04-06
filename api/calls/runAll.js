module.exports = function runAll() {

    var empCall = require('./employee.js');
    var projCall = require('./projects.js');
    var jobsCall = require('./jobs.js');

    empCall();
    projCall();
    jobsCall();

};