'use strict';

const pokemonGif = require('pokemon-gif');

function greet(name) {
	name = name || 'friend';
	return 'Hello ' + name + '!';
}

var randomPokemon = Math.floor(Math.random() * 720 + 1);

console.log(greet(process.argv[2]) + ' Here is your awesome pokemon gif!', pokemonGif(randomPokemon));

module.exports = greet;
