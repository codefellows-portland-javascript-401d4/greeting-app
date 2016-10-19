//Second attempt to submit Monday PR for full bonus pts. (was pointed at master not not txtincorporated)
var assert = require('assert');
var greet = require('./greet');
const exec = require('child_process').execSync;
var inputReturn = exec('node index.js "tester"');

describe('greeter', function() {

  it('greets with name', function() {
    //do the thing we want to test
    var greeting = greet('tester');
    //use the assert module to test
    //will throw error for us if not true
    assert.equal(greeting, 'hello tester');
  });

  it('greets with "friend" when no name given', function() {
    var greeting = greet();
    assert.equal(greeting, 'hello friend');
  });

  it('input passes', function() {
    var greetPerson = greet('tester');
    inputReturn = inputReturn.toString().split('\n');
    assert.equal(greetPerson, inputReturn[0]);
  })
});

describe('some other functionality', function() {
  it('this other test...', function() {
    assert.equal(2,2);
  });
});
