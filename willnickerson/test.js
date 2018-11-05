'use strict';
var assert = require('assert');
var greet = require('./greet');


describe('greeting', function() {
  it('greets with name', function() {
    var greeting = greet('tester');
    assert.equal(greeting, 'hello, tester');
  });
  it('greets with no name', function() {
    var greeting = greet();
    assert.equal(greeting, 'hello, nameless human');
  });
});

//I do not believe this test is neccesary
// describe('greeting', function() {
//   it('greets with input', function() {
//     process.argv[2] = 'tester';
//     assert(greet(process.argv[2]) == 'hello, tester');
//   });
// });
