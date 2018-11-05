'use strict';

function greet(name){
  name = name || 'nameless human';
  var greeting = 'hello,';
  var combined = greeting + ' ' + name;
  return combined;
}

console.log(process.argv);
console.log(greet(process.argv[2]));

module.exports = greet;
