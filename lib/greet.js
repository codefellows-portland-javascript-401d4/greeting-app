var emoji = require('node-emoji');

function greet(name){
    if (name) {
        name += ' ' + emoji.get('wave');
    } else {
        name = 'friend ' + emoji.get('thumbsup');
    };
    // name = name + ' ' + emoji.get('wave') || ('friend ' + emoji.get('smile'));
    return 'hello ' + name;
};

module.exports = greet;
