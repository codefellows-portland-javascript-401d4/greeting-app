var greet = require('./greet');
var assert = require('assert');

describe('greeter', function() {

  it('greet with name', function() {
    var greeting = greet('test');
    assert.equal(greeting, 'hello test');
  });

  it('greet if no name', function() {
    var greeting = greet();
    assert.equal(greeting, 'hello my new friend');
  });
});
