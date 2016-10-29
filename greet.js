'use strict';

const randomGreet = require('random-greetings');
const dogs = require('dog-ascii-faces');

function greet(name) {
    var greeting = randomGreet.greet();
    var name = name || 'friend';
    var completeGreet = `${greeting}, ${name}! \n`;

    return (completeGreet);
}

console.log(greet(process.argv[2]) + 'Here is a cute dog face for you:', dogs());

module.exports = greet;