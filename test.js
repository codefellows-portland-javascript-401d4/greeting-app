var assert = require('assert');

//names a function expression 'greet' which requires 
var greet = require('./greeting');
//run a test called 'greets with name'
describe('greeter', function() {
  it('greets with name', function() {
    //naming the function expression 'greet',' which passes in 'Risa'
    var greeting = greet('Risa');
    //test the function expression which requires the result 'hello Risa'
    assert.equal(greeting, 'hello, Risa');
  });
});