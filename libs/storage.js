var config = require('../config');
var cache_name = '../server/' + config.caching;
var caching = require(cache_name);

module.exports = {
    
    saveBounds: function(id, bounds){
        caching.saveBounds(id, bounds);
    },
    
    saveTracking: function(id, sentence, done){
        caching.saveTracking(id, sentence, done);
    }
};