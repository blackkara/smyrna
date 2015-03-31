var Log = false;
var cache = require('./cache');

module.exports = {
    
    // TO REDIS OR OTHER CACHE
    // This device (@id) has entered this area (@geofence)
    // param @id: Which device sent this geofencing event ?
    // param @sentence: the sentence mentions about geofencing moment (latlng, sped etc.)
    // param @geofence: Which geofence the device has entered ? 
    // param @cb: callback
    enter: function(id, sentence, geofence, cb){
        if(log) console.log('Geofencing layer got geofencing...');
        if(log) console.log('Geofencing and sentence will be cached...');
        if(log) console.log('GEOFENCING ENTER CACHED !');
    },
    
    // TO REDIS OR OTHER CACHE
    // This device (@id) has left this area (@geofence)
    // param @id: Which device sent this geofencing event ?
    // param @sentence: the sentence mentions about geofencing moment (latlng, sped etc.)
    // param @geofence: Which geofence the device has left ? 
    // param @cb: callback
    exit : function(id, sentence, geofence, cb){
        if(log) console.log('Geofencing layer got geofencing...');
        if(log) console.log('Geofencing and sentence will be cached...');
        if(log) console.log('GEOFENCING EXIT CACHED !');
    }
}