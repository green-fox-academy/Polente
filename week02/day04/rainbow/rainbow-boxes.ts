'use strict';

const myCanvasWidth: number = 700;
const myCanvasHeigth: number = 700;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.


let colorz: string[]= ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
ctx.fillStyle= colorz[6]
ctx.fillRect(myCanvasWidth/2 - (700/2), myCanvasHeigth/2 - (700/2), 700, 700)
ctx.fillStyle= colorz[5]
ctx.fillRect(myCanvasWidth/2 - (600/2), myCanvasHeigth/2 - (600/2), 600, 600)
ctx.fillStyle= colorz[4]
ctx.fillRect(myCanvasWidth/2 - (500/2), myCanvasHeigth/2 - (500/2), 500, 500)
ctx.fillStyle= colorz[3]
ctx.fillRect(myCanvasWidth/2 - (400/2), myCanvasHeigth/2 - (400/2), 400, 400)
ctx.fillStyle= colorz[2]
ctx.fillRect(myCanvasWidth/2 - (300/2), myCanvasHeigth/2 - (300/2), 300, 300)
ctx.fillStyle= colorz[1]
ctx.fillRect(myCanvasWidth/2 - (200/2), myCanvasHeigth/2 - (200/2), 200, 200)
ctx.fillStyle= colorz[0]
ctx.fillRect(myCanvasWidth/2 - (100/2), myCanvasHeigth/2 - (100/2), 100, 100)

/* function sqDrawer(i){
    
    ctx.fillStyle= colorz[i];
    for(let i: number= 600; i>=0; i--){
        ctx.fillRect(myCanvasWidth/2 -(i/2), myCanvasHeigth/2 -(i/2), i, i);
        
   }

}

sqDrawer(600); */





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