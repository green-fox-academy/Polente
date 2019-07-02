'use strict'

let reverseThis= ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"

function reversingMagic(reverseTheThing){
let splitSentece= reverseTheThing.split("");
let reversedSentence = splitSentece.reverse();
let joinSentence = reversedSentence.join("");

return joinSentence;
}

console.log(reversingMagic(reverseThis))
