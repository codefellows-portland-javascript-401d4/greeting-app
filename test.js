var assert = require('assert');
var sync = require('child_process').execSync;
var greet = require('./greet');
describe('greet', function(){

  it('greets with name', function() {
    var greeting = sync('node greet.js david', {encoding: 'utf-8'});
    assert.equal(greeting, 'hello david\n');
  });

});