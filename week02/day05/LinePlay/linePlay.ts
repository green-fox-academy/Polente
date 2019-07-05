'use strict';

const myCanvasWidth: number = 700;
const myCanvasHeigth: number = 700;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext('2d');




for(let i: number= 0; i< 21; i++){
    
    ctx.beginPath();
    ctx.strokeStyle="blue"
    ctx.moveTo(i*35,0);
    ctx.lineTo(myCanvasWidth, i*35);
    ctx.stroke();
}
 for(let k: number= 0; k< 21; k++){

    ctx.beginPath();
    ctx.strokeStyle="purple"
    ctx.moveTo(0, k*35);
    ctx.lineTo(k*35, myCanvasHeigth);
    ctx.stroke();
}


