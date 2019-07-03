
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle= "#EB01A5"
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI, true)
ctx.arc(200, 100, 50, 0, Math.PI, true)
ctx.arc(95, 100, 155, 0, Math.PI/2.67)
ctx.arc(200, 100, 150, 0.61*Math.PI, Math.PI)
ctx.fill();

