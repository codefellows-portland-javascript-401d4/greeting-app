/** Created by Gloria on 10/17/16. **/

var assert = require('assert');
var sayHello = require('./greeter');
var argv = process.argv;

it('greet user by name', function() {
  // test that it will greet by hard-coded name, when passed a name
  name = 'Gloria';
  var greeting = sayHello(name);
  assert.equal(greeting, 'Hello Gloria!');
});

if (argv.length = 3) {
  it('greet a generic user', function () {
    // test that it will greet when not passed a name
    var greeting = sayHello();
    assert.equal(greeting, 'Hello!');
  });
}

console.log('in the tests, ', argv);
if (argv.length > 3) {
  it('greet a console user', function () {
    // test that arguments taken in via the command line are processed correctly
    var greeting = sayHello();
    var argString = argv.slice(3).join(' ');
    assert.equal(greeting, 'Hello ' + argString);
  });
}
