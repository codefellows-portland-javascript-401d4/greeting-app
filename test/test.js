var greet = require('../greet');
var assert = require('chai').assert;
// var greetemoji = require('node-emoji').greetemoji;
const emoji = require('node-emoji');

describe('greeting test', function() {

  it('greets with an emoji', function() {
    var greeting = greet('test');
    assert.equal(greeting, 'Bonjour, test' + emoji.emojify('I :heart: :coffee:'));
  });

  it('greets with "mon ami" without name', function() {
    var greeting = greet();
    assert.equal(greeting, 'Bonjour, mon ami' + emoji.get('flag-fr'));
  });

  // it('ends greeting with appropriate emoji', function() {
  //   var greeting = greet('testemoji');
  //   var regex = /^emoji/;
  //       // isolate node-emoji at end of greeting
  //   var endemoji = greeting.replace(regex, '');
  //   assert.isAbove(greetemoji.indexOf(endemoji), 0);
  // });
});
