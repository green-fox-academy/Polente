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


let diffArray: Array<string | boolean> = ["Ege", true]


diffArray.splice(0,1, "marks")



let odds: number [] = [1, 2, 3, 4, 5].filter(function(item){

return item % 2 !== 0})

console.log(odds)


