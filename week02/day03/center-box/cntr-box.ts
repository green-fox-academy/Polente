    
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication

let size: number= 20;
let x: number= 390;
let y: number= 290;

function boxDrawer(k, j, a){

    ctx.strokeRect(k, j, a, a)
}


for(let i = 1; i < 7; i*=2){


    boxDrawer(x-(i*10), y-(i*10), size*i);

}
