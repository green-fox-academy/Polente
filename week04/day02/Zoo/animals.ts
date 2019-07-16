'use strict';

abstract class Animal {

    age: number;
    gender: string;

    constructor(age?: number, gender?: string) {
        this.age = age;
        this.gender = gender;
    }
    abstract getName();
    abstract breed();
    abstract animalType();
}
export { Animal }