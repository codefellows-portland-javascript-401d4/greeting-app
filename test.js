var assert = require('assert');
var greet = require('./greet');
describe('greet', function(){

    it('greets with name', function() {
        var greeting = greet();
        assert.equal('hello david', greeting);
    });

});