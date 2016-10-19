var greet = require('../lib/greet');
var assert = require('chai').assert;
//for the command line bonus
var es = require('child_process').execSync;

    //give it a name
    //gets back 
    //logs the current day of the week as a string
describe('greeter', function() {
  it('gets the current day of week', function() {
    var greeting = greet('anyname');
    var current = greeting.currentDay;
    assert.match(current, /^(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/g, 'currentDay passes the regexp');
  });

  it('gets the current time', function() {
    var greeting = greet('anothername');
    var current = greeting.currentTime;
    assert.match(current, /^([1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)?$/i);
  });

  it('gets the greeting', function() {
    var fullGreeting = greet('yetanothername');
    var greeting = fullGreeting.greeting;
    assert.equal(greeting, 'Hello yetanothername, how you doing?');
  });

  it('greets using name', function() {
    var greeting = greet('tester');
    assert.equal(greeting, 'Hello tester, how you doing?');
  });

  it('greets using "friend" when no name given', function() {
    var greeting = greet();
    assert.equal(greeting, 'Hello friend, how you doing?');
  });

  it('greets using Tim', function() {
    var greeting = greet('Tim');
    assert.equal(greeting, 'Hello Tim, you rock!!');
  });

  it('greets from command line', function() {
    var greeting = es('node lib/greet.js Bob', {
      encoding: 'utf-8'
    }).trim();
    assert.equal(greeting, 'Hello Bob, how you doing?');
  });

  it('gets the current time with am/pm', function() {
    var timeOfGreeting = new Date();
    assert()
  });

  it('turn name/friend into ascii art', function() {

  });

  // compute time at greeting call
  // display time after greeting
  // display the time as ascii art


});