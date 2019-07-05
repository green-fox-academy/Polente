"use strict";

const myCanvasWidth: number = 620;
const myCanvasHeigth: number = 620;
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext("2d");

let size: number = 20;

function boardDraw(a, b) {
  for (let k: number = 0; k < 17; k++) {
    ctx.fillRect(k * a * 2, b, a, a);
  }
}

for (let j: number = 0; j < 17; j++) {

  if(j%2==0){
  boardDraw(size, j * size * 2);}
  else{

    ctx.moveTo(j*size*2)
  }
}
