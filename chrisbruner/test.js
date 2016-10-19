var assert = require('chai').assert;
var greet = require('./lib/greet').greet;
var parting = require('./lib/greet').parting;
var esync = require('child_process').execSync;
var emoji = require('node-emoji');
var exec = require('child_process').exec;

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

    it('this will return a special greeting when I input my name (Christopher|Chris) Bruner into greet', function() {
        var greeting = greet('Christopher Bruner');
        var check = emoji.emojify('Yo Chris! What up buddy? Have you had your coffee today? :coffee:');
        assert.equal(greeting, check);
    });

    it('this will check the first prompt', function() {
        var check = esync('node ./lib/greet.js "Jane Doe"', {encoding:'utf-8'});
        assert.equal(check, 'hello Jane Doe\nHow are you?');
    });

    it('this will check your input after the initial prompt', function(done) {
        var child = exec('node ./lib/greet.js "Jane Doe"');
        var loopCounter = 0;
        child.stdout.on('data', function(data) {
            if(loopCounter === 0) {
                loopCounter += 1;
                assert.equal(data, 'hello Jane Doe\n');
            } else if (loopCounter === 1) {
                loopCounter += 1;
                assert.equal(data, 'How are you?');
                child.stdin.write('crappy\n');
            } else if (loopCounter === 2) {
                loopCounter += 1;
                assert.equal(data, 'I see, you\'re feeling crappy. Just so you know, I think you\'re awesome.\n');
                done();
            } else {
                done();
            }
        });
    });
});

describe('parting', function() {
    it('this should test the most basic parting phrase', function() {
        var part = parting('Chris');
        assert.equal(part, 'see you Chris');
    })
});

describe('some other functionality', function() {
    it('this other test...', function(){
        assert.equal(2,2);
    });
});
