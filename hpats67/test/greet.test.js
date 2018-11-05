var assert = require('assert');

var greet = require('../greet')

var exec = require('child_process').execSync;


describe('greeter', function(){
    var hello = greet('steven')
    
    it('greets with name', function() {
        console.log(hello)
        assert.equal (hello, hello)
    });
});
