var assert = require('assert');
var greet = require('../lib/greeting');

describe('greeting', function() {
  it('greeting === "Welcome to Node, 401 Student!', function() {
    var greeting = greet('401 Student!');

    assert.equal(greeting, 'Welcome to Node, 401 Student!');
  });
});

describe('greeting length', function() {
  it('greeting length', function() {
    var greetingLength = greet('401 Student!').length;
      assert.equal(greetingLength, 29);
  });
});