"use strict";

declare function require(path: string): any;
const fs = require("fs");

let single: string = "Durukan Ege";
try {
  let singleLine = fs.writeFileSync("my-file.txt", `${single}`);
  console.log(singleLine);
} catch (e) {
  console.log("Unable to write file: my-file.txt");
}
