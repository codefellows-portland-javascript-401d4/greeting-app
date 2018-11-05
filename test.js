//require the module 
var assert = require('assert');
//require the greet file adn provide path to file
var greet = require('./greet');

describe ('greeter', function() {
    //what it should do
    it('greets with name', function() {
        var greeting = greet('tester');
        //run through module to check
        assert.equal(greeting, 'hello tester');
    });
    
    //what it should do if no name is provided
    it('greets with "friend" when no name is given', function() {
        var greeting = greet();
        assert.equal(greeting, 'hello friend');
    });
    
});