var greet = require('../greet');
var assert = require('chai').assert;

const emoji = require('node-emoji');

describe('greeting test', function() {

  it('greets with an "I love coffee" emoji', function() {
    var greeting = greet('test');
    console.log(greeting);
    assert.equal(greeting, 'Bonjour, test' + '. ' + emoji.emojify('I :heart: :coffee:'));
  });

  it('greets with "mon ami" & French flag emoji without name', function() {
    var greeting = greet('');
    console.log(greeting);
    assert.equal(greeting, 'Bonjour, mon ami. ' + emoji.get('flag-fr'));
  });

});
