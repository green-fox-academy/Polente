'use strict';

const myCanvasWidth: number = 700;
const myCanvasHeigth: number = 700;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext('2d');

/* for(let i: number= 0; i< 21; i++){
    
    ctx.beginPath();
    ctx.strokeStyle="blue"
    ctx.moveTo(i*35,0);
    ctx.lineTo(myCanvasWidth, i*35);
    ctx.stroke();

} */

let k: number= 0

for(let i: number= 10; i>0; i--){
    
    ctx.beginPath();
    ctx.strokeStyle="green"
    ctx.moveTo(k,myCanvasHeigth/2);
    ctx.lineTo(myCanvasWidth/2, i*35);
    ctx.stroke();
    
    k = k+35

}
for(let i: number= 0; i<=10; i++){
    
    ctx.beginPath();
    ctx.moveTo(k,myCanvasHeigth/2);
    ctx.lineTo(myCanvasWidth/2, i*35);
    ctx.stroke();
    
    k = k+35

}

k=0
for(let i: number= 1; i<=10; i++){
    
    ctx.beginPath();
    ctx.moveTo(k,myCanvasHeigth/2);
    ctx.lineTo(myCanvasWidth/2, i*35 + myCanvasHeigth/2);
    ctx.stroke();
    
    k = k+35

}
for(let i: number= 10; i>0; i--){
    
    ctx.beginPath();
    ctx.moveTo(k,myCanvasHeigth/2);
    ctx.lineTo(myCanvasWidth/2, i*35 + myCanvasHeigth/2);
    ctx.stroke();
    
    k = k+35

}