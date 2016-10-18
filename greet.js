'use strict';

function greet(name) {
  name = name || 'friend';
  return 'hello ' + name;
}

console.log(greet(process.argv[2]));

module.exports = greet;