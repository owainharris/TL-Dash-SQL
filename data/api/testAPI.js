/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */


const TrafficLive = require('../lib/trafficLive.js');
const dateformat = require("dateformat");



module.exports = {

    employees: function employees() {
        const tl = new TrafficLive({
            email: 'owainh2@gmail.com',
            token: 'VsrLCefrEBXgSCF7cOt5jNNGnGyAf2uVTtDoBQxG',
            pageSize: 500 //max 500
        });
        tl.employees.all((response, key) => {
            const empArray = response.data.map(item => [item.employeeDetails.id, item.active, item.employeeDetails.personalDetails.firstName, item.employeeDetails.personalDetails.lastName, item.employeeDetails.personalDetails.emailAddress, item.employeeDetails.costPerHour.amountString, item.employeeDetails.hoursWorkedPerDayMinutes / 60 * 5, item.employeeDetails.hoursWorkedPerDayBillableMinutes / 60 * 5]);
            return [empArray];
        });
    }
};