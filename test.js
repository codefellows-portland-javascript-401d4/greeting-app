
const assert = require('assert');
const greet = require('./greet');
const exec = require('child_process').execSync;
let inputReturn = exec('node index.js michelle');

describe('greeter:', () => {
  it('greets with name', () => {
    let greeting = greet('tester');
    assert.equal(greeting, 'hello tester');
  });

  it('greets with "insert cool name" when no name given', () => {
    let greeting = greet();
    assert.equal(greeting, 'hello insert cool name');
  });
});


describe('arguments:', () => {
  it('arguments are being processsed correctly', () => {
    assert.equal('blah', process.argv[3]);
  });
  it('input passes', () => {
    let greeting = greet('michelle');
    inputReturn = inputReturn.toString().split('\n');
    assert.equal(greeting, inputReturn[0]);
  });
});