
var greet = require('./greet');

var allParts = '';
process.argv.forEach((val, idx, arr) => {
    if (idx > 1) {
        allParts += val + ' ';
    };
    return allParts;
});

var anotherGreeting = greet(allParts.trim()); // get rid of the trailing space on the name(s)
console.log(anotherGreeting);
