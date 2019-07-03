
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.


/* let x: number = 0
let y: number = 0 */

function makeItHappen(x: number, y: number) {


    ctx.beginPath();
    ctx.moveTo( x, y);
    ctx.lineTo(400, 300);
    ctx.stroke();
    
};
    
    for (let i: number = 1; i <4; i++) {
        
       makeItHappen(i*70,i*70)
        
    };

