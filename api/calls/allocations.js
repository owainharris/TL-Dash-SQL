const execSync = require('child_process').execSync;
var TrafficLive = require('../lib/trafficLive.js');
var fs = require('fs');
var file1 = '../data/allocations.json';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/tl';


// Decalre API Auth
var tl = new TrafficLive({
    email: 'owainh2@gmail.com',
    token: 'VsrLCefrEBXgSCF7cOt5jNNGnGyAf2uVTtDoBQxG',
    pageSize: 500 //max 500
});


tl.allocations.recent(function(response) {
    fs.writeFile(file1, JSON.stringify(response, function(key, value) {
        var result = value;
        return result;
    }, 3, 'utf8'));


    var dropDocument = function(db, callback) {
        db.collection('allocations').drop(function(err, result) {
            assert.equal(err, null);
            console.log("Step 1: Dropped Allocations");
            callback();
        });
    };

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        dropDocument(db, function() {
            db.close();
        });
    });


    var insertDocument = function(db, callback) {
        db.collection('allocations').insert(response.data, function(err, result) {
            assert.equal(err, null);
            console.log("Step 2: Inserted Allocations");
            callback();
        });
    };

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        insertDocument(db, function() {
            db.close();
        });
    });
});