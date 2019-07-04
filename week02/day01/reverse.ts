'use strict'

let numMatrix: number[]= [3, 4, 5, 6, 7];

//console.log(numMatrix.reverse());


function reverseArray(a){

for(let index: number=3; index<8; index++){

    a.push(index);
    return a;

};

for(let decrease: number= 9; decrease>= 0; decrease-1){

    a[decrease]= a[9-decrease]
    return a;
};
}



console.log(reverseArray(numMatrix));