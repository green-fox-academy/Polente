"use strict";

declare function require(path: string): any;
const fs = require("fs");

try {
  let print = fs.readFileSync("my-File.txt", "utf-8");
  console.log(print);
} catch (e) {
  console.log("Unable to read file: my-file.txt");
}
