var assert = require('assert');
var greet = require('./greet');
var execSync = require('child_process').execSync;

describe('greeter', function() {

    it('greets with name if name supplied', function() {
        var actual = greet('tester');
        var expected = 'Hello, tester';
        assert.equal(actual, expected);
    });

    it('greets with "friend" if no name is supplied', function() {
        var actual = greet();
        var expected = 'Hello, friend';
        assert.equal(actual, expected);
    });

});

describe('cmd-line-greeter', function() {

    it('prints greeting with name to terminal if invoked with name as an argument', function() {
        var name = 'tester';
        var actual = execSync('node greet.js ' + name);

        assert.equal(actual.toString(), 'Hello, ' + name + '\n'); 
    });

    it('prints greeting with friend to terminal if invoked with no argument', function() {
        var actual = execSync('node greet.js');

        assert.equal(actual.toString(), 'Hello, friend\n'); 
    });

});