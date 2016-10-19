var nice = require('ascii-art');

function greet(name) {
    var name = process.argv.pop();
    process.argv.push(name);
    return('Hello, ' + name + '!');
};

console.log('figlet ' + greet());
greet();

module.exports = greet;
