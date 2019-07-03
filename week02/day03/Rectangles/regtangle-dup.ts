'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function regDrawer(x, y, w, h) {

    ctx.fillRect(x, y, w, h);


}

for (let i = 0; i < 500; i += 100) {

    ctx.fillStyle = "red"
    if (i == 100) {

        ctx.fillStyle = "green"
    } else if (i == 200) {


        ctx.fillStyle = "blue"

    } else if (i == 300) {

        ctx.fillStyle = "orange"
    }
    regDrawer(0 + i, 0 + i, i/3, i/4);

}