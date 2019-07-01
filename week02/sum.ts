'use strict';


let myName: string= "Ege"
let yourName: string= "Johny"
let hisName: string= "Mark"



let cutePuppy: string[] = ["Morzsi", "Liza", "Furkesz", "Riley"]

console.log(cutePuppy)

for(let i: number= 0; i < cutePuppy.length; i++){

    console.log(cutePuppy[i])
}


cutePuppy.forEach(function(puppy) {

    console.log(puppy);
})