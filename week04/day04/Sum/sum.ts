'use strict'
export class Sum {

    numList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    add(a, b) {
        return this.numList[a] + this.numList[b];
    }
}