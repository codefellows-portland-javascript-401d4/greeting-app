var assert = require('assert');
var greet = require('./greet');

describe('greeting test', function() {
    
    it('greets with a name', function() {
        var greeting = greet('test');
        assert.equal(greeting, 'Bonjour, test');
    });

    it('greets with "mon ami" without name', function() {
        var greeting = greet();
        assert.equal(greeting, 'Bonjour, mon ami');
    });
});