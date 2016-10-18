'use strict';

var assert = require('assert');
var greeting = require('./app');
var exec = require('child_process').execSync;
var inputReturn = exec('node input.js Sue');

describe('tests', function() {
    it('tests run correctly', function() {
        assert.equal('test', process.argv[3]);
    });
    describe('greetings', function() {
        beforeEach(function() {
            console.log('Testing...');
        });
        
        afterEach(function() {
            console.log('Testing complete.');
        });
    
        it('uses name', function() {
            var greetPerson = greeting('person');
            assert.equal(greetPerson, 'Hello, person.');
        });

        it('uses comrade', function() {
            var greetPerson = greeting();
            assert.equal(greetPerson, 'Hello, Comrade.');
        });

        it('input passes', function() {
            var greetPerson = greeting('Sue');
            inputReturn = inputReturn.toString().split('\n');
            assert.equal(greetPerson, inputReturn[0]);
        });
    });
});




