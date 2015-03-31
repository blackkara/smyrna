var should = require('chai').should();
var storage = require('../../libs/storage');

describe('user map bounds changed', function(){
    
    var id = '1234ABCD6789';
    var bounds = 'BOUNDS';
    it('storage uses a method and saves user map bounds', function(){
        storage.saveBounds(id, bounds);
    });
    
});