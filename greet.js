const emoji = require('node-emoji');
const prompt = require('prompt');

function greet(name) {
  prompt.start();
  var name = prompt.get('What is your name?');
  name = name || 'mon ami';
  if (name != null) {
    return 'Bonjour, ' + name + '. ' + emoji.emojify('I :heart: :coffee:');
  }   else {
    return 'Bonjour, ' + name + '. ' + emoji.get('flag-fr');
  }
}

module.exports = greet;
