var catFacts = require('cat-facts');

function greet() {
  var name = process.argv.pop();
  console.log('Hello,', name,'.', 'Today\'s fun fact is:',catFacts.random(),'.');
  process.argv.push(name);
  return('Hello,', name,'.', 'Today\'s fun fact is:', catFacts.random(),'.');
}

greet();

module.exports = greet;