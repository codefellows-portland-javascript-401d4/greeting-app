const readline = require('readline');
var cool = require('cool-ascii-faces');

//in case does not work, you can still enter another name and this will print out
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    // prompt: process.argv[2] ? 'hello ' + process.argv.pop() + ' ' + cool() + '\n' : 'hello' + ' ' + cool() + '\n'
    prompt: process.argv[2] ? 'hello ' + process.argv.pop() + '\n' : 'hello\n'  
});

function greet(name) { 
    if (Array.isArray(name)) {
        if (name.length < 2) {
            return 'hello ' + name[0];
        } else if (name.length < 3) {
            return 'hello ' + name[0] + ' and ' + name[1];
        } else {
            var newString = 'hello ';
            for (var i = 0; i < name.length; i++) {
                if (i < (name.length - 1)) {
                    newString += name[i] + ', ';
                } else {
                    newString += 'and ' + name[i];
                };
            };
            return newString;
        };
    };
    name = (name || 'friend');
    return 'hello ' + name;
};

rl.prompt();
rl.close(); 


module.exports = greet;