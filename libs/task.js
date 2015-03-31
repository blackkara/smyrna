var task = (function(){
    'use strict';
    
    var Log = false;
    var config = require('../../config');
    var NanoTimer = require('nanotimer');
    var cache = require('./cache');
    var db = require('../../libs/db');
    
    
    // FROM REDIS OR OTHER CACHE MECHANISMS
    // This job collects stored data from cache and
    // performs bulk operations.
    var job_syncToDb = function(cb){
        
        cache.collect(function(error, records){
            if(error) throw error;
            if(log) console.log('Data being collected...');
            if(log) console.log('DATA COLLECTED');
            if(log) console.log('Generating bulk operation...');
            if(log) console.log('BULK OPERATION PERFORMED');
            
            if(Object.keys(records).length < 1) return;
            var record, lastUpdate, lastSentence, sentences, sentence, id;
            var bulk = db.collections.device.initializeUnorderedBulkOp();
            
            for(device_id in records){
                record = records[device_id];
                lastUpdate = record.lastUpdate;
                lastSentence = record.lastSentence;
                sentences = record.sentences;
                id = record.id;
                
                bulk.find({_id: id}).update({$set: { lastSentence: lastSentence, lastUpdate: lastUpdate }});
                
                while(sentence = sentences.pop()) {
                    bulk.find({_id: id}).update({$addToSet: { sentences: lastSentence } });
                }
            }
            
            bulk.execute(cb);
        });
    }
    
    // param @period: in which period system runs this job ?
    function Task(period){
        this.timer = new NanoTimer();
        this.period = period || config.collectPeriod;
        
        if(Log) console.log('Task has been created !');
        if(Log) console.log('Task period is ' + this.period + ' ms');
    }
    
    Task.prototype = {
        
        start: function(){
            var self = this;
            db.connect(function(){
                var per = (self.period / 1000) + 's';
                if(Log) console.log('job has started, period ' + per);
                self.timer.setInterval(job_syncToDb, [], per, null);
            });
        },
        
        stop: function(){
             this.timer.clearInterval();
             if(Log) console.log('job has stopped');
        }
    }
    
    return Task;
    
}());

module.exports = task;