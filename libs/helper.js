var db = require('./db');

module.exports = {

    // Creates mongodb id
    createId: function(){
        return db.createId();
    },
    
    // Creates timestamp
    getTimestamp: function(){ 
        return Math.floor(Date.now() / 1000);
    }
}