
var greet = require('./greet');

    var allParts = '';
    process.argv.forEach((val, idx, arr) => {
        if (idx > 1) {
            allParts += val + ' ';
        };
        return allParts;
    });

    var anotherGreeting = greet(allParts);
    console.log(anotherGreeting);

    return anotherGreeting;

// module.exports = singleLine;
