'use strict';

import { StringedInstrument } from './instruments';

export class ElectricGuitar extends StringedInstrument {
    name: string;
    numberOfStrings: number;

    constructor(name: string = 'Electric Guitar', numberOfStrings: number = 6) {
        super();
        this.name = name
        this.numberOfStrings = numberOfStrings
    }

    sound(): string {
        return 'Twang'
    }
    play() {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound}`)
    }
}

export class BassGuitar extends StringedInstrument {
    name: string;
    numberOfStrings: number;

    constructor(name: string = 'Bass Guitar', numberOfStrings: number = 4) {
        super();
        this.name = name
        this.numberOfStrings = numberOfStrings
    }

    sound(): string {
        return 'Duum-duum-duum'
    }
    play() {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound}`)
    }
}

export class Violin extends StringedInstrument {
    name: string;
    numberOfStrings: number;

    constructor(name: string = 'Violin', numberOfStrings: number = 4) {
        super();
        this.name = name
        this.numberOfStrings = numberOfStrings
    }

    sound(): string {
        return 'Screech'
    }
    play() {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound}`)
    }
}

