"use strict";

declare function require(path: string): any;
const fs = require("fs");

let read = fs.readFileSync(`something.txt`, "utf-8");
console.log(read);

let cut: string[]= read.split('\n');

console.log(cut.length);
