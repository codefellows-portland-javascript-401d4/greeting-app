var assert = require('assert');

var greet = require('../greet')

var exec = require('child_process').execSync;


describe('greeter', function(){
    it('greets with name', function() {
    var hello = exec('node greet.js Steven', {encoding: 'utf-8'});
        assert.equal (hello, 'Hello, Steven!\n')
    });
});
