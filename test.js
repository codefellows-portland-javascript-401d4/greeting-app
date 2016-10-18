var assert = require('assert');
var greet = require('./greet');
//for the command line bonus
var es = require('child_process').execSync;

describe('greeter', function() {
  it('greets using name', function() {
    var greeting = greet('tester');
    assert.equal(greeting, 'Hello tester, how you doing?');
  });

  it('greets using "friend" when no name given', function() {
    var greeting = greet();
    assert.equal(greeting, 'Hello friend, how you doing?');
  });

  it('greets using Tim', function() {
    var greeting = greet('Tim');
    assert.equal(greeting, 'Hello Tim, you rock!!');
  });

  it('greets from command line', function() {
    var greeting = es('node greet.js Bob', {
      encoding: 'utf-8'
    }).trim();
    assert.equal(greeting, 'Hello Bob, how you doing?');
  });
});
