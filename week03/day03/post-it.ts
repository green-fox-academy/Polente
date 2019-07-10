"use strict";

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, textColor: string, text: string) {
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
    this.text = text;
  }
}

let firstPostIT: PostIt = new PostIt("orange", "blue", "Idea 1");
let secondPostIT: PostIt = new PostIt("pink", "black", "Awesome");
let thirdPostIT: PostIt = new PostIt("yellow", "green", "Superb!");

console.log(firstPostIT);
console.log(secondPostIT);
console.log(thirdPostIT);
