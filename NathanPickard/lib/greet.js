var emoji = require('node-emoji');
var burrito = emoji.get('burrito');

function greetUser(name) {
    name = name || 'captain';
    console.log('Hello ' + name + ' here is a');
    console.log(emoji.get('burrito'));
    return 'yo ' + name + burrito;
}

module.exports = greetUser;