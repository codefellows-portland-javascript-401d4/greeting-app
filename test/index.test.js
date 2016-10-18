/** Created by Gloria on 10/18/16. **/

var assert = require('assert');
var sayHello = require('../greeter');
var cmd = require('../index');

var args = process.argv[(process.argv.length - 1)];
var child = require('child_process')
  .execSync('node greeter.js ' + '"' + args + '"');

describe('index', function() {
  it('greets a console user', function () {
    // test that arguments taken in via the command line are processed correctly
    var greeting = child.toString();
    assert.equal(greeting, 'Hello ' + args + '!\n');
  });

});