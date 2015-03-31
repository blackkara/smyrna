var should = require('chai').should();
var smyrna = require('../../index');

describe('user map bounds changed', function(){
    
    var Bounds = smyrna.bounds;
    var id = '1234ABCD6789';
    var bounds = 'BOUNDS';
    it('smyrna saves user map bounds', function(){
        Bounds.save(id, bounds);
    });
    
});