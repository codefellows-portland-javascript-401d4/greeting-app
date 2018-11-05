const emoji = require('node-emoji');

function greet(name) {

  name = name || null;
  if (name != null) {
    return 'Bonjour, ' + name + '. ' + emoji.emojify('I :heart: :coffee:');
  } else {
    return 'Bonjour, mon ami. ' + emoji.get('flag-fr');
  }
}

module.exports = greet;
