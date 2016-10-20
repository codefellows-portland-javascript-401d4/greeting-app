//additional entry point for my app that lets you enter in 'node index blah' to get the greeting with blah.
// if no process.argv[2] specified, default parameter for name is used.
const greet = require('./lib/greet');

let response = greet(process.argv[2], process.argv[3]);

console.log(response);
