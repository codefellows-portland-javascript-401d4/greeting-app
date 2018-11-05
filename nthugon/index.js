var greet = require('./greet');

console.log(greet(process.argv[2]) + ' Your user id number is: ' + process.getuid() + '.');