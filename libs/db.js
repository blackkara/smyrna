var Config = require('../config');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var Log = false;
var config = Config.db;

var url = 'mongodb://' 
    + config.username + ':' 
    + config.password + '@'
    + config.host + ':'
    + config.port + '/'
    + config.database;


exports.createId = function(){
    return new ObjectID();
}

exports.connect = function(callback){
    if(Log)console.log(url);
    if(Log)console.log('Connecting to database...');
    MongoClient.connect(url, function(error, db){
        if(error) throw error;
        
        
        if(Log)console.log('Connected to database !');
        var collections = {};
        collections.device = db.collection('Device');
        exports.collections = collections;
        exports.database = db;
        exports.connected = true;
        callback(error, db, collections);
    });
};

