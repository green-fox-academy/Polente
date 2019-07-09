"use strict";

declare function require(path: string): any;
const fs = require("fs");

function writeMultiple(a, b, c) {
  fs.writeFileSync(`${a}`, "");
  for (let i: number = 0; i < c; i++) {
    if (i == 4) {
      let multiple = fs.appendFileSync(`${a}`, `${b}`);
    } else {
      let multiple = fs.appendFileSync(`${a}`, `${b}\n`);
    }
  }
}

console.log(writeMultiple("apple.txt", "apple", 5));
