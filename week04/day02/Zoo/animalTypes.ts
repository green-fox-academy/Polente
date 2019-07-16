'use strict'

import { Animal } from './animals';

class Mammals extends Animal {
    name: string;
    private type: string;
    breedType: string = 'pushing miniature versions out.'

    constructor(name: string, type: string = 'Mammal', gender: string, age: number) {
        super(age, gender);
        this.name = name;
        this.type = type;
    }
    getName(): void {
        console.log(`Your ${this.type}'s name is: ${this.name}`);
    }
    animalType(): void {
        console.log(`${this.name} is a ${this.type}.`);
    }
    breed(): void {
        console.log(`A ${this.name} is breeding by ${this.breedType}`)
    }

}

class Bird extends Animal {
    name: string;
    private type: string;
    breedType: string = 'laying eggs.'

    constructor(name: string, type: string = 'Bird', gender: string, age: number) {
        super(age, gender);
        this.name = name;
        this.type = type;
    }
    getName(): void {
        console.log(`Your ${this.type}'s name is: ${this.name}`);
    }
    animalType(): void {
        console.log(`${this.name} is a ${this.type}.`);
    }
    breed(): void {
        console.log(`A ${this.name} is breeding by ${this.breedType}`)
    }
}

class Reptile extends Animal {
    name: string;
    private type: string;
    breedType: string = 'laying eggs.'

    constructor(name: string, type: string = 'Reptile', gender: string, age: number) {
        super(age, gender);
        this.name = name;
        this.type = type;
    }
    getName(): void {
        console.log(`Your ${this.type}'s name is: ${this.name}`);
    }
    animalType(): void {
        console.log(`${this.name} is a ${this.type}.`);
    }
    breed(): void {
        console.log(`A ${this.name} is breeding by ${this.breedType}`)
    }
}

let croc: Reptile = new Reptile("Crocie", 'reptile', 'male', 12);
console.log(croc);
croc.getName();
croc.animalType();
croc.breed();

console.log("------------------");

let birdie: Bird = new Bird('Birdie', 'bird', 'female', 3);
birdie.animalType();
birdie.breed();