/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */
/*jshint -W030 */
const TrafficLive = require('./trafficLive.js');

module.exports = function tl() {
    const tl = new TrafficLive({
        email: 'owainh2@gmail.com',
        token: 'VsrLCefrEBXgSCF7cOt5jNNGnGyAf2uVTtDoBQxG',
        pageSize: 500 //max 500
    });
};