var assert = require('assert');
var greetDrew = require('./greeting_app');

describe('greeter', function() {

    it('greets with name', function() {
        var greeting = greetDrew('drew');
        assert.equal(greeting, 'hey drew');
    });

    it('greets with "buddy" if no name is given', function() {
        var greeting = greetDrew();
        assert.equal(greeting, 'hey buddy');
    });
});
