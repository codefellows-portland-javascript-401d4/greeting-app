'use strict';

const convert = require('cyrillic-to-latin');

function proletarian(name) {
    name = name || 'Comrade';
    var greeting = 'Hello, ' + name + '. ';
    var personNum = 'Your number is ' + Math.ceil(Math.random() * 100) + '. ';
    var hail = 'Да здравствует товарищ Сталин';
    var response = greeting + personNum + convert(hail) + '!';
    return response;
}

module.exports = proletarian;