var assert = require('assert');
var greet = require('./greet');

describe('greet', function() {
    it('greets with name', function() {
        var greeting = greet('tester');

        assert.equal(greeting, 'hello tester');
    });

    it('greets with "friend" if no name given', function() {
        var greeting = greet();
        assert.equal(greeting, 'hello friend');
    })
})



