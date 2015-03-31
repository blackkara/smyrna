var Bounds = require('./libs/bounds');
var Tracking = require('./libs/tracking');
module.exports = {
    
    bounds: {
        /**
        * @id user id
        * @bounds, user's browser map
        * bounds northeast southwest
        */
        save: function(id, bounds){
            Bounds.save(id, bounds);
        },
        
        /**
        * @id user id
        * When communication finished,
        * removes stored bounds for user
        */
        delete: function(){
            Bounds.delete(id);
        }
    },
    
    tracking: {
        /**
        * @id device id
        * @sentence
        * @done
        */
        save: function(id, sentence, done){
            Tracking.save(id, sentence, done);
        }
    }
};
