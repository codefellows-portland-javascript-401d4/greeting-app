const assert = require('assert');
const greet = require('../lib/greet');

describe('hello', () => {
  it('says: Hello, my name is ', () => {
    let greeting = greet('Joe');
    assert.equal(greeting, 'Hello, my name is Joe');
  });
  it('show emoji the end of the sentence', () => {
    let greeting = greet('Joe', 'coffee');
    assert.equal(greeting, 'Hello, my name is Joe' + '☕️');
  });
});

describe('greeter:', () => {
  it('greets with name', () => {
    let greeting = greet('tester');
    assert.equal(greeting, 'Hello, my name is tester');
  });

  it('greets with "insert cool name" when no name given', () => {
    let greeting = greet();
    assert.equal(greeting, 'Hello, my name is insert cool name');
  });
});
