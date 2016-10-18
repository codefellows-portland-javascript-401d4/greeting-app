
var assert = require('assert');
var greet = require('./greet');
var single = require('./singleLine');

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

it('greet single line', function() {
    // console.log(process.argv);
    var anotherGreeting = single(process.argv[2]);
    assert.equal( anotherGreeting, 'hello '+ process.argv[2]);
});
