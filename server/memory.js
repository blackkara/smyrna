var util = require('util');
var memory = function memory(){
    
    /**
    * @storage, memory storage
    * @bounds, key tag for bounds
    */
    var bounds_key = 'BOUNDS_%s';
    var tracking_key = 'TRACKING_%s';
    var storage = {};
    
    this.saveBounds = function(id, bounds){
        storage[util.format(bounds_key, id)] = bounds;
        console.log(storage);
    };
    
    this.deleteBounds = function(id){
        delete storage[util.format(bounds, id)];
    };
    
    /**
    * @id device id (sender)
    * @sentence
    */
    this.saveTracking = function(id, sentence, done){
        var log = {sentence: sentence, date: new Date()};
        var key = util.format(tracking_key, id);
        var tracking = storage[key];
        
        if(tracking){
            tracking.sentences.push(log);
        } else {
            tracking = {sentences: [log]}
        }
        tracking.lastSentence = sentence;
        tracking.lastDate = log.date;
        storage[key] = tracking;
        
        console.log('saved sentence count: ' + tracking.sentences.length);
    };
    
    if(memory.caller != memory.getInstance){
        throw new Error('already instanciated');
    }
};

memory.instance = null;
memory.getInstance = function(){
    if(this.instance === null){
        this.instance = new memory();
    }
    return this.instance;
};
module.exports = memory.getInstance();