"use strict";

class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  use(inkAmount: number) {
    this.inkAmount -= inkAmount;
  }

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
  }
}


let mySharpie: Sharpie = new Sharpie("red", 0.9);
console.log(mySharpie);
mySharpie.use(10);
console.log(mySharpie);
