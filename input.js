'use strict';

var greeting = require('./prolModule.js');

var input = process.argv[2];

var response = greeting(input);

console.log(response);