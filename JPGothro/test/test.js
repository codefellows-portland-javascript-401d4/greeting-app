
var assert = require('assert');
var greet = require('../lib/greet');
var single = require('../lib/singleLine');
var exec = require('child_process').execSync;
var emoji = require('node-emoji');

describe('checking greetings', function(){
    it('greets with name', function() {
        // run the first test
        var greeting = greet('tester');
        // check the result and the expected emoji
        assert.equal( greeting, 'hello tester ' + emoji.get('wave'));
    });

    it('greets with no name', function() {
        // the second pass
        var nextGreeting = greet();
        // check that one
        // with no name passed, the result will include an emoji.
        assert.equal( nextGreeting, 'hello friend ' + emoji.get('thumbsup'));
    });

    it('greet single line', function() {
        // call the single line fcn with argument(s)
        var anotherGreeting = exec('node ./lib/singleLine.js A Man Has No Name', {encoding: 'UTF-8'});
        anotherGreeting = anotherGreeting.replace('\n', '');
        assert.equal( anotherGreeting, 'hello A Man Has No Name ' + emoji.get('wave'));
    });

    it('greet single line no supplied name', function() {
        // call the single line fcn again with no name(s) supplied
        var anotherGreeting = exec('node ./lib/singleLine.js', {encoding: 'UTF-8'});
        anotherGreeting = anotherGreeting.replace('\n', '');
        assert.equal( anotherGreeting, 'hello friend ' + emoji.get('thumbsup'));
    });
});
