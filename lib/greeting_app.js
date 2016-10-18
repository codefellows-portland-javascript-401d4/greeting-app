var emoji = require('node-emoji');

function greetDrew(name) {
    name = name || 'buddy';
    console.log('Hello ' + name + ' have a cup of');
    console.log(emoji.get('coffee'));
    return 'hey ' + name;
}

greetDrew('Drew');
module.exports = greetDrew;
