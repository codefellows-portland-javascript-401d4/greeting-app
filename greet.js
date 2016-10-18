var emoji = require('node-emoji');


var greet = function(name, emoji) {
    
  return 'hello ' + name + ' ' + emoji;
};
console.log(greet(process.argv[2], emoji.get(process.argv[3])));
module.exports = greet;

