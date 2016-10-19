var assert = require('assert');

var esync = require('child_process').execSync;

var greet = require('./greeting');

describe('greeter', function() {
  //run a test called 'greets with name'
  it('greets with name', function() {
    //naming the function expression 'greet',' which passes in 'Risa'
    var catgreeting = esync('node greeting.js Risa', {
      encoding:'utf-8'
    });
    //using the split method here to split the string at its period
    //this will return an array of strings, and we only want the first item in the array
    var period = '.';
    var justgreeting = catgreeting.split(period)[0];
    //test the function expression which requires the result 'Hello, Risa'
    assert.equal(justgreeting, 'Hello, Risa ');
  });

  it('random cat fact contains "cats"', function() {
    var greeting = esync('node greeting.js Risa', {
      encoding:'utf-8'
    }).toLowerCase();
    var whitespace = /\s/g;
    console.log(greeting.split(whitespace));
    assert.equal(greeting.split(whitespace).includes('cats'), true);
  });
});