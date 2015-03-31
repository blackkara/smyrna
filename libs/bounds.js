var storage = require('./storage');
module.exports = {
    
    /**
    * @id user id
    * @bounds, user's browser map
    * bounds northeast southwest
    */
    save: function(id, bounds){
        storage.saveBounds(id, bounds);
    },
    
    /**
    * @id user id
    * When communication finished,
    * removes stored bounds for user
    */
    delete: function(id){
        storage.deleteBounds(id);
    },
    
    getAll: function(id){
        return null;
    },
    
    /**
    * @point is location sender's latitude and longitude and 
    * @bounds is user's browser map northeast southwest
    * within determines if a point in user's map bounds
    * http://www.counsellingbyabhi.com/2013/01/google-map-check-whether-point-latlong.html
    */
    within: function(point, bounds){
        var px = point.lng;
        var py = point.lat;
        var ax = bounds.ne.lng;
        var ay = bounds.ne.lat;
        var bx = bounds.sw.lng;
        var by = bounds.sw.lat;
        if(ay > by){
            ax = bx;
            ay = by;
            bx = ax;
            by = ay;
        }
        if(py === ay || py === by) py += 0.00000001;
        if((py > by || py < ay) || (px > Math.max(ax, bx))) return false;
        if (px < Math.min(ax, bx)) return true;
        
        var red = (ax != bx) ? ((by - ay) / (bx - ax)) : Infinity;
        var blue = (ax != px) ? ((py - ay) / (px - ax)) : Infinity;
        return (blue >= red);
    }
};