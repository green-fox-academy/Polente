'use strict'

let example: string= "In a dishwasher far far away";

let re:any = /dishwasher/gi;

console.log(example)

let replacedExample = example.replace(re, "galaxy");

console.log(replacedExample);