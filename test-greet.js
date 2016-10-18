var assert = require('assert');
var greet = require('./greet');

it('greets user by name', function() {
    var greeting = greet('user');

    assert.equal(greeting, 'Howdy user');
});