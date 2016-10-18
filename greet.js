'use strict';

const pokemonGif = require('pokemon-gif');

function greet(name) {
	name = name || 'friend';
	return 'Hello ' + name + '!';
}

var pokeArray = ['charizard', 'pikachu', 'gyarados', 'onix'];
var randomPokemon = Math.floor(Math.random() * pokeArray.length);

console.log(greet(process.argv[2]) + ' Here is your awesome pokemon gif!', pokemonGif(pokeArray[randomPokemon]));

module.exports = greet;
