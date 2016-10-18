var assert = require('assert');

var greet = require('../greet')

describe('greeter', function(){
    it('greets with name', function() {
        assert.equal (greet('Steven'), 'Hello, Steven!')
    });
});
