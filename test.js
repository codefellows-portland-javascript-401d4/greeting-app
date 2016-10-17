var assert = require('assert');
var greet = require('./greet');

it('greets with name', function(){
  //do the thing we are testing
  var greeting = greet('tester');
  //use assert module to test it
  //it will throw an error if it fails
  assert.equal(greeting, 'Hello, tester. Make yourself at home.');
});







