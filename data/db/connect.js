/* jshint node: true, browserify: true */
'use strict';
/*jshint esversion: 6 */
/*jshint -W030 */


const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ok',
    database: 'tl',
});

exports.connection = connection;