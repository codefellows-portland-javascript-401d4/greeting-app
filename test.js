
var assert = require('assert');
var greet = require('./greet');

it('greets with name', function() {
    // run the first test
    var greeting = greet('tester');
    // check the result
    assert.equal( greeting, 'hello tester');
});

it('greets with no name', function() {
    // the second pass
    var nextGreeting = greet();
    // check that one
    assert.equal( nextGreeting, 'hello friend');
});

