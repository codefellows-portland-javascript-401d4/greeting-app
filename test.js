'use strict';

var assert = require('assert');
var greet = require('./greet');
var eSync = require('child_process').execSync;


describe('greeter', function() {

  it('greets with name', function() {
    var greeting = greet('tester');
    assert.equal(greeting, 'hello tester');
  });

  it('greets with "friend" when no name given', function() {
    var greeting = greet();
    assert.equal(greeting, 'hello friend');
  });

  it('tests input', function() {
    var greeting = eSync('node greet.js tyler', {encoding: 'utf-8'});
    assert.equal(greeting, 'hello tyler\n')
  });
});

describe('some other functionality', function() {

  it('this other test...', function() {
    
    assert.equal(2,2);
  });
});