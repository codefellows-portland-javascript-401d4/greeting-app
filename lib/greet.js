// using emojis for greeting.
var emoji = require('node-emoji');

function greet(name){
    if (name) {
        // name supplied, wave hello emoji.
        name += ' ' + emoji.get('wave');
    } else {
        // no name supplied, use friend and a thumbs up emoji.
        name = 'friend ' + emoji.get('thumbsup');
    };
    return 'hello ' + name;
};

module.exports = greet;
