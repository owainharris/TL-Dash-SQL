/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */


const TrafficLive = require('../lib/trafficLive.js');
const mysql = require("mysql");
const dateformat = require("dateformat");
var EventEmitter = require('events').EventEmitter;
const assert = require('assert');
const execSync = require('child_process').execSync;

// Connection to MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ok',
    database: 'tl'
});

const tl = new TrafficLive({
    email: 'owainh2@gmail.com',
    token: 'VsrLCefrEBXgSCF7cOt5jNNGnGyAf2uVTtDoBQxG',
    pageSize: 500 //max 500
});

module.exports = {

    employees: function employees() {
        tl.employees.all((response, key) => {
            const array = response.data.map(item => [item.employeeDetails.id, item.active, item.employeeDetails.personalDetails.firstName, item.employeeDetails.personalDetails.lastName, item.employeeDetails.personalDetails.emailAddress, item.employeeDetails.costPerHour.amountString, item.employeeDetails.hoursWorkedPerDayMinutes / 60 * 5, item.employeeDetails.hoursWorkedPerDayBillableMinutes / 60 * 5]);
            const query = connection.query('INSERT IGNORE INTO employees(pk_userId, active, firstName, lastName, emailAddress, costPerHour, hoursWorked, hoursBillable) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " EMPLOYEES to MySQL!" + '\n');
                    }
                });
        });
    },


    chargebands: function chargebands() {
        tl.chargebands.all((response, key) => {
            const array = response.data.map(item => [item.id, item.chargeBandType, item.name, item.cost.amountString, item.rate.amountString, item.multiplier]);
            const query = connection.query('INSERT IGNORE INTO chargebands(chargeband_id, type, name, cost, rate, markup) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " CHARGEBANDS to MySQL!" + '\n');
                    }
                });
        });
    },

    clients: function clients() {
        tl.clients.all((response, key) => {
            const array = response.data.map(item => [item.id, item.name]);
            const query = connection.query('INSERT IGNORE INTO clients(clientID, clientName) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " CLIENTS to MySQL!" + '\n');
                    }
                });
        });
    },

    clientNames: function clientNames() {
        tl.clientNames.all((response, key) => {
            const array = response.data.map(item => [item.id, item.personalDetails.firstName, item.personalDetails.lastName]);
            const query = connection.query('INSERT IGNORE INTO clientNames(clientEmployeeID, firstName, LastName) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " CLIENT NAMES to MySQL!" + '\n');
                    }
                });
        });
    },

    projects: function projects() {
        tl.projects.all((response, key) => {
            const array = response.data.map(item => [item.id, item.name, item.clientCRMEntryId]);
            const query = connection.query('INSERT IGNORE INTO projects(projectID, projectDescription, fk_clientID) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " PROJECTS to MySQL!" + '\n');
                    }
                });
        });
    },

    jobDetails: function jobDetails() {
        tl.jobs.allDetails((response, key) => {
            const array = response.data.map(item => [item.id, dateformat(item.dateCreated, 'yyyy-mm-dd'), item.description, item.name, item.jobTypeListItemId.id, item.accountManagerId, item.jobContactId, item.ownerProjectId]);
            const query = connection.query('INSERT IGNORE INTO job_detail(jobDetailId, dateCreated, jobDescription, jobName, fk_jobTypeListItemId, fk_jobOwnerID, fk_jobContactId, fk_projectId) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " JOB DETAILS to MySQL!" + '\n');
                    }
                });
        });
    },

    jobs: function jobs() {
        tl.jobs.all((response, key) => {
            const array = response.data.map(item => [item.id, item.jobNumber, item.jobStateType, item.jobBillingStateType, dateformat(item.jobStartDate, 'yyyy-mm-dd'), dateformat(item.internalDeadline, 'yyyy-mm-dd'), item.potentialValue.amountString, item.estimatedSellValue.amountString, item.billedNets, item.jobDetailId]);
            const query = connection.query('INSERT IGNORE INTO jobs(jobID, jobNumber, jobStateType, jobBillingStateType, jobStartDate, internalDeadline, potentialValue, estimatedSellValue, billedNet, fk_jobDetailId) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " JOBS to MySQL!" + '\n');
                    }
                });
        });
    },

    tasks: function tasks() {
        tl.tasks.all((response, key) => {
            const array = response.data.map(item => [item.id, item.quantity, item.durationMinutes, item.totalTimeLoggedMinutes, item.totalTimeLoggedBillableMinutes, item.cost.amountString, item.rate.amountString, item.complete, item.jobId]);
            const query = connection.query('INSERT IGNORE INTO tasks(taskId, qty, estMins, loggedMins, loggedBillableMins, estCost, estRate, complete, fk_jobId) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " TASKS to MySQL!" + '\n');
                    }
                });
        });
    },

    entries: function entries() {
        tl.entries.recent((response, key) => {
            const array = response.data.map(item => [item.id, dateformat(item.endTime, 'yyyy-mm-dd'), item.minutes / 60, item.timeEntryCost.amountString, item.trafficEmployeeId.id]);
            const query = connection.query('INSERT IGNORE INTO entries(entrieId, dateCreated, minutes, timeEntryCost, fk_trafficEmployeeID) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " ENTRIES to MySQL!" + '\n');
                    }
                });
        });
    },

    allocations: function allocations() {
        tl.allocations.recent((response, key) => {
            const array = response.data.map(item => [item.id, dateformat(item.earliestIntervalStart, 'yyyy-mm-dd'), dateformat(item.latestIntervalEnd, 'yyyy-mm-dd')]);
            const query = connection.query('INSERT IGNORE INTO allocations(allocationId, earliestIntervalStart, latestIntervalEnd ) VALUES ?', [array],
                (error, results, fields) => {
                    if (error) console.log(error);
                    else {
                        console.log("Imported " + array.length + " ALLOCATIONS to MySQL!" + '\n');
                    }
                });
        });
    }
};


/*
function allocations() {
    const tl = new TrafficLive({
        email: 'owainh2@gmail.com',
        token: 'VsrLCefrEBXgSCF7cOt5jNNGnGyAf2uVTtDoBQxG',
        pageSize: 500 //max 500
    });
    tl.allocations.recent((response, key) => {
        const array = response.data.map(item => [item.id, item.trafficEmployeeId]);
        const query = connection.query('INSERT INTO allocations(allocationId, fk_employeeId) VALUES ?', [array],
            (error, results, fields) => {
                if (error) console.log(error);
                else {
                    console.log("Imported " + array.length + " ALLOCATIONS to MySQL!" + '\n');
                }
            });
    });
}
*/