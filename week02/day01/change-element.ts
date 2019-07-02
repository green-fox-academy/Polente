'use strict'

let numList: number[] = [1, 2, 3, 8, 5, 6].map(function (i) {

    if (i == 8) {
        return 4
    } else {
        return i
    }

});

console.log(numList)