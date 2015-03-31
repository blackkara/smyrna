var should = require('chai').should();
var memory = require('../../server/memory');

describe('user map bounds changed', function(){
    
    var id = '1234ABCD6789';
    var bounds = 'BOUNDS';
    it('memory saves user map bounds', function(){
        memory.saveBounds(id, bounds);
    });
    
});