var welcome = require('./greeting');
var assert = require('assert'); // allows easier comparison of tests.

describe('First Test: Greeting', function() {

    it('Greeted user', function() {
        // do the thing we want to test
        var greetTest = welcome('Chuck');
        //  assert.equal checks 

        assert.equal( greetTest, 'Hello Chuck' );
    });

    it('Hello Tim if name not given', function() {
        var greeting = welcome();
        assert.equal( greeting, 'Hello Tim' );
    });
});