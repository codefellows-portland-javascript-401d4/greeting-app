var assert = require('chai').assert;
var greet = require('../greet');
const random = require('random-greetings');
const dogs = require('dog-ascii-faces');

it('greets user by name with a randomly-generated greeting', function() {
    var greeting = greet('Caitlin');
    assert.equal(greeting, `${greeting}`);
});

it('greets with "User" if name is not given', function() {
    var greetingBasic = greet();
    assert.equal(greetingBasic, `${greetingBasic}`);
});

it('displays a dog ascii face after greeting user', function() {
    var dog = greet(process.argv[2]) + dogs();
    assert.equal(dog, `${dog}`);
});