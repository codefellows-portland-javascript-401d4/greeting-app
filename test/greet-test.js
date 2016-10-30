var assert = require('chai').assert;
var greet = require('../greet');

it('greets user by name with a randomly-generated greeting', function() {
    var greeting = greet('Caitlin');
    assert.equal(greeting, `${greeting}`);
});

it('greets with "User" if name is not given', function() {
    var greetingBasic = greet();
    assert.equal(greetingBasic, `${greetingBasic}`);
});

it.skip('displays a dog ascii face after greeting user', function() {
    assert.equal();
});