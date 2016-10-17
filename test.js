var assert = require('assert');
var greet = require('./greet');

describe('greeter', function() {

    it('greets with name', function() {
        var greeting = greet('tester');
        assert.equal(greeting, 'hello tester');
    });

    it('greets with "friend" when no name given', function() {
        var greeting = greet();
        assert.equal(greeting, 'hello friend');
    });

    it('greets with special greeting when name is Andy', function() {
        var greeting = greet('Andy');
        assert.equal(greeting, "Heyyyy, what's up, buddy?");
    });

    // it('greets with arg passed from command line', function() {
    //     var greeting = greet();
    //     assert.equal(greeting, 'hello andy');
    // });

});