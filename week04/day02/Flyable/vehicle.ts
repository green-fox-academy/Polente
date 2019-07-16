'use strict';

import { Flyable } from './flyable';
import { Bird } from '../Zoo/animalTypes';

abstract class Vehicle {
    numberOfWings: number;
    passengerCapacity: number;
    numberOfTires: number;

}

class Helicopter extends Vehicle implements Flyable {
    name: string;
    fly() {
        console.log(`Your ${this.name} is flying.`)
    }
    land() {
        console.log(`Your ${this.name} has landed.`)
    }
    constructor(name: string) {
        super()
        this.name = name;
    }
}

let börd: Bird = new Bird('Börd', 'bird', 'male', 3);
let helimeli: Helicopter = new Helicopter('Helicoppy');
helimeli.fly();
helimeli.land();
console.log("-----------");
börd.fly();
börd.land();