/** Created by Gloria on 10/18/16. **/

var assert = require('assert');
var chai = require('chai');
var sayHello = require('../greeter');
var cmd = require('../index');

// Grab the last argument passed to this script
var args = process.argv[(process.argv.length - 1)];

// If it contains a .js, it's a path, so don't use it. Otherwise, assume it's a name.
if (args.indexOf('.js') > -1) {
  args = '';
}

var child = require('child_process')
  .execSync('node index.js ' + '"' + args + '"');


describe('index', function() {

  it('greets a console user providing an empty string', function () {
    // test that arguments taken in via the command line are processed correctly
    var greeting = child.toString();
    assert.equal(greeting, 'Hello' + args + '!\n');
  });

});