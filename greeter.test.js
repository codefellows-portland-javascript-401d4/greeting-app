/** Created by Gloria on 10/17/16. **/

var assert = require('assert');
var sayHello = require('./greeter');
var args = process.argv[(process.argv.length - 1)];
var child = require('child_process')
  .execSync('node greeter.js ' + '"' + args + '"');

describe('greeter', function() {
  it('greet user by name', function() {
    // test that it will greet by hard-coded name, when passed a name
    name = 'Gloria';
    var greeting = sayHello(name);
    assert.equal(greeting, 'Hello Gloria!');
  });


  it('greet a generic user', function () {
    // test that it will greet when not passed a name
    var greeting = sayHello();
    assert.equal(greeting, 'Hello!');
  });


  it('greet a console user', function () {
    // test that arguments taken in via the command line are processed correctly
    var greeting = child.toString();
    assert.equal(greeting, 'Hello ' + args + '!\n');
  });
});
