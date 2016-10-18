'use strict';

const assert = require('chai').assert;
const greet = require('./greet');
const eSync = require('child_process').execSync;
const pokemonGif = require('pokemon-gif');

describe('greeter', function() {

	it('greets with name', function() {
		var greeting = greet('tester');
		assert.equal(greeting, 'Hello tester!');
	});

	it('greets with "friend" when no name given', function() {
		var greeting = greet();
		assert.equal(greeting, 'Hello friend!');
	});

	it('tests input', function() {
		var regEx = /^Hello/g;
		var greeting = eSync('node greet.js Tyler', {encoding: 'utf-8'});
		assert.match(greeting, regEx);
	});

	it('includes a link', function() {
		var randomPokemon = Math.floor(Math.random() * 720 + 1);
		var regEx = /^http:/g;
		assert.match(pokemonGif(randomPokemon), regEx);
	});
});

describe('tests parsing', function() {

	it('tests simple parsing', function() {
		var parsed = parseInt('2');
		assert.equal(parsed, 2);
	});
});