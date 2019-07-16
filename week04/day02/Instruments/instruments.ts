'use strict';

abstract class Instrument {

    name: string;

    constructor(name: string = 'instrument') {
        this.name = name
    }
    abstract play();
}

abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;

    play() { }

    sound() {
        this.play();
    }
}

export { StringedInstrument };