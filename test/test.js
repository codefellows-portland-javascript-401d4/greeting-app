var assert = require('assert');
var greetDrew = require('../lib/greeting_app');
var emoji = require('node-emoji');
var coffee = emoji.get('coffee');

describe('greeter app', function() {

    it('greets with name and coffee emoji', function() {
        var greeting = greetDrew('drew');
        assert.equal(greeting, 'hey drew' + coffee);
    });

    it('greets with "buddy" if no name is given and coffee emoji', function() {
        var greeting = greetDrew();
        assert.equal(greeting, 'hey buddy' + coffee);
    });
});
