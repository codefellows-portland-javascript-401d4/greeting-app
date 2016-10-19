// var assert = require('assert');
var greet = require('../lib/greet');
var assert = require('chai').assert;

describe('greeter', function() {

  it('greets with name', function() {
    //do the thing we want to test
    var greeting = greet('tester');
    //use the assert module to test
    //will throw error for us if not true
    assert.match(greeting, /^Hello tester\.  Today is (Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day\./g, 'Matches with name arg.');
  });

  it('greets with "friend" when no name given', function() {
    var greeting = greet();
    assert.match(greeting, /^Hello friend\.  Today is (Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day\./g, 'Matches with name arg.');
  });
});

// describe('some other functionality', function() {
//   it('states day of week', function() {
//   });
// });