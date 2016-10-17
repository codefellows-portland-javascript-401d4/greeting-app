var assert = require('assert');
var greet = require('./greet');

describe('greeter', function() {

    it('greets with name if name supplied', function() {
        var actual = greet('tester');
        var expected = 'Hello, tester';
        assert.equal(actual, expected);
    });

    it('greets with "friend" if no name is supplied', function() {
        var actual = greet();
        var expected = 'Hello, friend';
        assert.equal(actual, expected);
    });
});