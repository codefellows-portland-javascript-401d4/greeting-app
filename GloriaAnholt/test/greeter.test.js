/** Created by Gloria on 10/17/16. **/

var assert = require('assert');
var sayHello = require('../greeter');

describe('greeter', function() {
  it('greets user by name', function() {
    // test that it will greet by hard-coded name, when passed a name
    name = 'Gloria';
    var greeting = sayHello(name);
    assert.equal(greeting, 'Hello Gloria!');
  });

  it('greets a generic user', function () {
    // test that it will greet when not passed a name
    var greeting = sayHello();
    assert.equal(greeting, 'Hello!');
  });
});
