var storage = require('./storage');

module.exports = {
    
    save: function(id, sentence, done){
        storage.saveTracking(id, sentence, done);
    }
};
