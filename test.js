'use strict';

const assert = require('chai').assert;
const greet = require('./greet');
const eSync = require('child_process').execSync;
const pokemonGif = require('pokemon-gif');

describe('greeter', function() {

	it('greets with name', function() {
		var greeting = greet('tester');
		assert.equal(greeting, 'hello tester');
	});

	it('greets with "friend" when no name given', function() {
		var greeting = greet();
		assert.equal(greeting, 'hello friend');
	});

	it('tests input', function() {
		var greeting = eSync('node greet.js tyler', {encoding: 'utf-8'});
		assert.equal(greeting, 'hello tyler\n');
	});

	it('includes a link', function() {
		var pokeArray = ['charizard', 'pikachu', 'gyrados', 'onix'];
		var randomPokemon = Math.floor(Math.random() * pokeArray.length + 1);
		var regEx = /^http:/g;
		assert.match(pokemonGif(pokeArray[randomPokemon]), regEx);
	});
});

describe('tests parsing', function() {

	it('tests simple parsing', function() {
		var parsed = parseInt('2');
		assert.equal(parsed, 2);
	});
});