'use strict';

import { Pokemon } from './pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

console.log('I choose you, ');

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Squirtle', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}

if (wildPokemon.type === 'leaf') {

    console.log(pokemonOfAsh[2]);
} else if (wildPokemon.type === "water") {
    console.log(pokemonOfAsh[1])
} else if (wildPokemon.type === "fire") {

    console.log(pokemonOfAsh[3 || 4])
} else {
    console.log("Your Pokemon had died :(")
}