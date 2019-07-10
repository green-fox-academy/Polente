"use strict";

class Counter {
  myNum: number = 0;

  add() {
    this.myNum += 1;
    return this.myNum;
  }
  addNumber(number) {
    this.myNum += number;
    return this.myNum;
  }
  get() {
    this.myNum;
  }
  reset() {
    this.myNum = 0;
  }
}

let theNum: Counter = new Counter();
theNum.get();
console.log(theNum);
