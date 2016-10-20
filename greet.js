var emoji = require('node-emoji');


var greet = function(name, emoji) {
    
  return 'hello ' + name + ' ' + emoji;
};

console.log(greet(process.argv[2], emoji.get(process.argv.pop())));
console.log('all args', process.argv);
module.exports = greet;

