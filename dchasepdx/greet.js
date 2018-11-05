var emoji = require('node-emoji');


var greet = function(name, emoji) {
    
  return 'hello ' + name + ' ' + emoji;
};

module.exports = greet;

console.log(greet(process.argv[2], emoji.get(process.argv.pop())));