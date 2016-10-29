'use strict';
const dogs = require('dog-ascii-faces');
const intnl = require('hello-international');

module.exports = function greet(name) {
    var greeting = intnl.getRandomGreeting('hello');
    var name = name || 'friend';
    var dogFace = dogs();
    var completeGreet = greeting + name + dogs();

    console.log (completeGreet);
}