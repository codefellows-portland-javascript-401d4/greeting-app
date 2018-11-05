'use strict';

var assert = require('chai').assert;
var interrogate = require('../prolModule.js');

describe('greeting new workers', function() {
    
    it('calls you comrade', function() {
        var name = interrogate();
        var regex = /Comrade/;
        assert.match(name, regex);
    });

    it('calls you by name', function() {
        var name = interrogate('Igor');
        var regex = /Igor/;
        assert.match(name, regex);
    });

    it('gives you number', function() {
        var num = interrogate();
        var regex = /\d/;
        assert.match(num, regex);
    });

    it('transliterates correctly', function() {
        var stalin = interrogate();
        var regex = /Da zdravstvuet tovariŝ Stalin!/;
        assert.match(stalin, regex);
    });
});




//Old code for reference

// describe('tests', function() {
//     it('tests run correctly', function() {
//         assert.equal('test', process.argv[3]);
//     });
//     describe('greetings', function() {
//         beforeEach(function() {
//             console.log('Testing...');
//         });
        
//         afterEach(function() {
//             console.log('Testing complete.');
//         });
    
//         it('uses name', function() {
//             var greetPerson = greeting('person');
//             assert.equal(greetPerson, 'Hello, person.');
//         });

//         it('uses comrade', function() {
//             var greetPerson = greeting();
//             assert.equal(greetPerson, 'Hello, Comrade.');
//         });

//         it('input passes', function() {
//             var greetPerson = greeting('Sue');
//             inputReturn = inputReturn.toString().split('\n');
//             assert.equal(greetPerson, inputReturn[0]);
//         });
//     });
// });




