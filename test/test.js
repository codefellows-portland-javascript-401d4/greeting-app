
var assert = require('assert');
var greet = require('../lib/greet');
var single = require('../lib/singleLine');
var exec = require('child_process').execSync;
var emoji = require('node-emoji');

describe('checking greetings', function(){
    it('greets with name', function() {
        // run the first test
        var greeting = greet('tester');
        // check the result
        assert.equal( greeting, 'hello tester');
    });

    it('greets with no name', function() {
        // the second pass
        var nextGreeting = greet();
        // check that one
        assert.equal( nextGreeting, 'hello friend');
    });

    it('greet single line', function() {
        // console.log(process.argv);
        var anotherGreeting = exec('node ./lib/singleLine.js Joe Jay Jeff', {encoding: 'UTF-8'});
        anotherGreeting = anotherGreeting.replace('\n', '');
        assert.equal( anotherGreeting, 'hello Joe Jay Jeff');
    });
});
