var sf = require('smyrna-faker');
var should = require('chai').should();
var memory = require('../../server/memory');

describe('a tracking device', function(){
    
    var deviceid = 'DEMO'
    var tracking = sf.tracking(deviceid, 10);
    var duration = tracking.duration + 1000;
    this.timeout(duration);
    
    it('bakak', function(done){
        
        function cb(finished, sentence){
            //console.log(sentence);
            memory.saveTracking(deviceid, sentence);
            if(finished){
                done();
            }
        }
        tracking.start(cb);
    });
});