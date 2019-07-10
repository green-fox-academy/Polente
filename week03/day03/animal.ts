"use strict";

class Animal {
  static hunger: number = 50;
  static thirst: number = 50;

  eat() {
    Animal.hunger -= 1;
    return Animal.hunger;
  }
  drink() {
    Animal.thirst -= 1;
    return Animal.thirst;
  }
  play() {
    Animal.hunger += 1;
    Animal.thirst += 1;
    return Animal.hunger, Animal.thirst;
  }
}

let myDog: Animal = new Animal();
myDog.play();
console.log("Your animal's status is: "+ (Animal.hunger + Animal.thirst));

