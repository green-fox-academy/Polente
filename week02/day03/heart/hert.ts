
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle= "#EB01A5"
ctx.beginPath();
ctx.arc(106, 102, 50, Math.PI*2, Math.PI, true)
ctx.arc(192, 102, 50, Math.PI*2, Math.PI, true)
ctx.arc(102, 95, 140, 0, Math.PI/2.8)
ctx.arc(196, 95, 140, 0.61*Math.PI, Math.PI)
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle= "#EB01A5"
ctx.moveTo(56.5,98);
ctx.lineWidth= 9;
ctx.lineTo(241.8,98);
ctx.stroke();
ctx.closePath();
