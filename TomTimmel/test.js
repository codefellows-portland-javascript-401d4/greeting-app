var assert = require('assert');
var greet = require('./index');

describe ('testing describe', function(){
    it('greet with name', function(){
        var greeting = greet('tester');

        assert.equal(greeting, 'hello tester');
    });
});
