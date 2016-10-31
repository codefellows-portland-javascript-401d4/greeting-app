'use strict';

const random = require('random-greetings');
const dogs = require('dog-ascii-faces');

function greet(name) {
    var greeting = random.greet().toLowerCase();
    var name = name || 'User';
    var completeGreet = `${name}, ${greeting}! \n`;

    return (completeGreet);
}

console.log(greet(process.argv[2]) + dogs());

module.exports = greet;