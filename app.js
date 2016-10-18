'use strict';

function proletarian(name) {
    name = name || 'Comrade';
    var response = 'Hello, ' + name + '.';
    return response;
}

module.exports = proletarian;