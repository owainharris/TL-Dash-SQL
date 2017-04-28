// Imports all the modules needed
var express = require('express');
var router = express.Router();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/index');
var timesheets = require('./routes/timesheets');
var jobs_all = require('./routes/jobs_all');
var jobs_all_weeks = require('./routes/jobs_all_weeks');
var jobs_all_months = require('./routes/jobs_all_months');
var timesheets_expected = require('./routes/timesheets_expected');



var app = express();

// Define the directory with the views and to use Jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'data')));

// Define what route files to use being routes/index.js for /
// routes/users.js for /users
// The route files then render the page
app.use('/', routes);
app.use('/timesheets', timesheets);
app.use('/jobs_all', jobs_all);
app.use('/jobs_all_weeks', jobs_all_weeks);
app.use('/jobs_all_months', jobs_all_months);
app.use('/timesheets_expected', timesheets_expected);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;