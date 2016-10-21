var greetUser = require('../lib/greet');
var assert = require('assert');
var emoji = require('node-emoji');
var burrito = emoji.get('burrito');


describe('greeter', function() {

    it('greets with the name and burrito emoji', function() {
        var greeting = greetUser('nate');
        assert.equal(greeting, 'yo nate' + burrito);
    });

    it('greets with captain if no name is given along with burrito', function() {
        var greeting = greetUser();
        assert.equal(greeting, 'yo captain' + burrito);
    });
});
