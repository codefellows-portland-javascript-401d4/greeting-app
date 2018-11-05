var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name?', function(answer) {
    console.log(greet(answer));
    rl.close();
});

function greet(str) {
    var name = str || 'friend';
    return 'hello ' + name;
}

module.exports = greet;