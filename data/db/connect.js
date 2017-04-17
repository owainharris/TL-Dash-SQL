/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */
/*jshint -W030 */

module.exports = function connection() {
    const mysql = require("mysql");
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ok',
        database: 'tl'
    });
};