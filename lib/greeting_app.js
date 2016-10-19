var emoji = require('node-emoji');
var coffee = emoji.get('coffee');

function greetDrew(name) {
    name = name || 'buddy';
    console.log('Hello ' + name + ' have a cup of');
    console.log(emoji.get('coffee'));
    return 'hey ' + name + coffee;
}

module.exports = greetDrew;
