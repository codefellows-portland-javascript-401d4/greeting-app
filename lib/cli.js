var readline = require('readline');
var greet = require('./greet');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(greet.greet(process.argv.pop()));
rl.question('How are you?', (answer) => {
    console.log('I see, you\'re feeling ' + answer + '. Just so you know, I think you\'re awesome.');
    rl.close();
});

module.exports = rl;