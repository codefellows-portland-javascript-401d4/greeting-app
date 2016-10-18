const greet = require('./greet');

let response = greet(process.argv[2]);

console.log(response);