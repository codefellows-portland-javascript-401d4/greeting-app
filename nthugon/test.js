var assert = require('assert');
var greet = require('./greet');
var child_process = require('child_process');

describe('greeter', function() {

  it('greets with name', function(){
    //do the thing we are testing
    var greeting = greet('tester');
    //use assert module to test it
    //it will throw an error if it fails
    assert.equal(greeting, 'Hello, tester. Make yourself at home.');
  });

  it('greets with "strange intuder" when no name is givin', function() {
    //do the thing we are testing
    var greeting = greet();
    //use assert module to test it
    //it will throw an error if it fails
    assert.equal(greeting, 'Hello, strange intruder. Make yourself at home.');
  });

});

describe('arguments', function() {

  it('grabs correct argument', function() {
    //do the thing we are testing
    var output = child_process.execSync('node index.js Nathan', {encoding: 'utf8'});
    //use assert module to test it
    //it will throw an error if it fails
    assert.equal(output, 'Hello, Nathan. Make yourself at home. Your user id number is: 501.\n');
  });
});









