'use strict';

var greeting = require('./app');

var input = process.argv[2];

var response = greeting(input);

console.log(response);