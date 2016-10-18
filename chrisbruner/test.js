var assert = require('chai').assert;
var greet = require('./lib/greet');
var esync = require('child_process').execSync;

describe('greeter', function() {

    it('greets with name', function() {
        //do the thing we want to test
        var greeting = greet('tester');
        //user the assert module to test
        //will throw error for us if not tester
        assert.equal( greeting, 'hello tester');
    });

    it('greets with "friend" when no name given', function() {
        var greeting = greet();
        assert.equal(greeting, 'hello friend');
    });

    it('greets with hello "name and name2" when given an array of names', function() {
        var greeting = greet(['Bonny', 'Clyde']);
        assert.equal(greeting, 'hello Bonny and Clyde');
    });

    it('greets with hello "name, name2, name3 ... and nameLast when given an array of names', function() {
        var greeting = greet(['Larry', 'Moe', 'Curly']);
        assert.equal(greeting, 'hello Larry, Moe, and Curly');
    });

    it('this will return a prompt with your name in the console', function() {
        var greeting = esync('node ./lib/greet.js "Jane Doe"', {encoding: 'utf-8'});
        assert.equal(greeting, 'hello Jane Doe\n');
    })
});

describe('some other functionality', function() {
    it('this other test...', function(){
        assert.equal(2,2);
    });
});