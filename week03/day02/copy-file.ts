"use strict";

//declare function require(path: string): any;
const fs = require("fs");

function copier(a, b) {
  try {
    let content = fs.readFileSync(`${a}`, "utf-8");
    fs.writeFileSync(`${b}`, `${content}`);
    return true;
  } catch (e) {
    return false;
  }
}

console.log(copier("apple.txt", "destination.txt"));
