"use strict";

const myCanvasWidth: number = 700;
const myCanvasHeigth: number = 700;
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext("2d");

for (let i: number = 0; i < 70; i++) {
  ctx.beginPath();
  ctx.moveTo(myCanvasWidth / 2 - i * 10, i * 20);
  ctx.lineTo(myCanvasWidth / 2 - i * 10 + i * 20, i * 20);

  ctx.stroke();
}

for (let i: number = 0; i < 36; i++) {
  ctx.beginPath();
  ctx.moveTo(i * 10, myCanvasHeigth - i * 20);
  ctx.lineTo(i * 20, myCanvasHeigth);
  ctx.stroke();
}
for (let i: number = 0; i < 36; i++) {
  ctx.beginPath();
  ctx.moveTo(myCanvasWidth - i * 10, myCanvasHeigth - i * 20);
  ctx.lineTo(myCanvasWidth - i * 20, myCanvasHeigth);
  ctx.stroke();
}
