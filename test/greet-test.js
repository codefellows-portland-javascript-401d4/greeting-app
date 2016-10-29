var assert = require('assert');
var greet = require('./greet');

it('greets user by name', function() {
    var greeting = greet('name');
    assert.equal(greeting, 'Howdy user');
});

it('greets user with a randomly-generated greeting', function() {
    assert.equal();
});

it('displays a dog ascii face after greeting user', function() {
    assert.equal();
});