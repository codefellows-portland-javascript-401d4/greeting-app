var assert = require('assert');
var sync = require('child_process').execSync;
var greet = require('./greet');
describe('greet', function(){

  it('greets with name and an emoji', function() {
   
    var greeting = sync('node greet.js david soccer', {encoding: 'utf-8'});
    console.log(process.argv);
    assert.equal(greeting, 'hello david ⚽️\n');
  });

});