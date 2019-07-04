'use strict';

const myCanvasWidth: number = 600;
const myCanvasHeigth: number = 600;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.


let colorz: string[]= ["violet", "indigo", "blue", "green", "yellow", "orange", "red"]

function sqDrawer(size){
    
    for(let i: number= 6; i>=0; i--){
        ctx.fillStyle= colorz[i];
        ctx.fillRect(myCanvasWidth/2 -(size/2), myCanvasHeigth/2 -(size/2), size, size);
        
   }

}

sqDrawer(600);





/* ctx.fillStyle="black"
ctx.fillRect(myCanvasWidth/2 - 300, myCanvasHeigth/2 - 300, 600, 600)
ctx.fillStyle="white"
ctx.fillRect(myCanvasWidth/2 - 270, myCanvasHeigth/2 - 270, 540, 540)
ctx.fillStyle="black"
ctx.fillRect(myCanvasWidth/2 - 240, myCanvasHeigth/2 - 240, 480, 480)
ctx.fillStyle="white"
ctx.fillRect(myCanvasWidth/2 - 210, myCanvasHeigth/2 - 210, 420, 420)
ctx.fillStyle="black"
ctx.fillRect(myCanvasWidth/2 - 180, myCanvasHeigth/2 - 180, 360, 360)
ctx.fillStyle="white"
ctx.fillRect(myCanvasWidth/2 - 150, myCanvasHeigth/2 - 150, 300, 300)
ctx.fillStyle="black"
ctx.fillRect(myCanvasWidth/2 - 120, myCanvasHeigth/2 - 120, 240, 240)
ctx.fillStyle="white"
ctx.fillRect(myCanvasWidth/2 - 90, myCanvasHeigth/2 - 90, 180, 180)
ctx.fillStyle="black"
ctx.fillRect(myCanvasWidth/2 - 60, myCanvasHeigth/2 - 60, 120, 120)
ctx.fillStyle="white"
ctx.fillRect(myCanvasWidth/2 - 30, myCanvasHeigth/2 - 30, 60, 60) */