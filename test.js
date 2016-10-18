var assert = require('assert');
var greeting = require('./helloGreeting');

describe('greeter', function() {
    it('greets with name', function() {
        var greetingMan = greeting('tester');
        assert.equal( greetingMan, 'hello there fellow');
    });

    it('greets with "friend" when no name given', function() {
        var greetingTwo = greeting();
        assert.equal( greetingTwo, 'Hey there teammate' );
    });
});

describe('this is some other functionality', function() {
    it('this other test...', function() {
        assert.equal(2,2);
    });
});