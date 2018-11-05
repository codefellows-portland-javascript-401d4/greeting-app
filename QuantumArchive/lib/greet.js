var emoji = require('node-emoji');
var emojiDictionary = emoji.emoji;
var readline = require('readline');

//in case does not work, you can still enter another name and this will print out

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(greet(process.argv.pop()));
rl.question('How are you?', (answer) => {
    console.log('I see, you\'re feeling ' + answer + '. Just so you know, I think you\'re awesome.');
    rl.close();
});

function greetNameArray(nameArray) {
    if (nameArray.length < 2) {
        return 'hello ' + nameArraye[0];
    } else if (nameArray.length < 3) {
        return 'hello ' + nameArray[0] + ' and ' + nameArray[1];
    } else {
        var newString = 'hello ';
        for (var i = 0; i < nameArray.length; i++) {
            if (i < (nameArray.length - 1)) {
                newString += nameArray[i] + ', ';
            } else {
                newString += 'and ' + nameArray[i];
            };
        };
        return newString;
    };
};

function greet(name) { 
    var nameRegex;
    if (typeof(name) === 'string') {
        nameRegex = /((Chris)(topher)*)(\s)(Bruner)/g;
        if (name.match(nameRegex)) {
            return emoji.emojify('Yo Chris! What up buddy? Have you had your coffee today? :coffee:');
        } else {
            return emoji.emojify('hello ' + name + ' :coffee:');
        };
    } else if (Array.isArray(name)) {
        return greetNameArray(name);
    } else {
        return 'hello friend';
    };
};

function parting(name) {
    name = name || 'friend';
    return 'see you ' + name;
};

module.exports = { greet: greet,
    parting: parting };
