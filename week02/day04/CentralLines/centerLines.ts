'use strict';

const myCanvasWidth: number = 620;
const myCanvasHeigth: number = 620;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext('2d');



function lol(j, k){
    
    while(k<=620){
        
        ctx.beginPath();
        ctx.moveTo(myCanvasWidth/2, myCanvasHeigth/2);
        
        ctx.lineTo(j,k);
        
        ctx.stroke();
        
        k += 20

    }
    while(k>=0){
        
        ctx.beginPath();
        ctx.moveTo(myCanvasWidth/2, myCanvasHeigth/2);
        
        ctx.lineTo(k, j);
        
        ctx.stroke();
        
        k -= 20

    }
    while(j>=0){
        
        ctx.beginPath();
        ctx.moveTo(myCanvasWidth/2, myCanvasHeigth/2);
        
        ctx.lineTo(k, j);
        
        ctx.stroke();
        
        j -= 20

    }
    while(j<=620){
        
        ctx.beginPath();
        ctx.moveTo(myCanvasWidth/2, myCanvasHeigth/2);
        
        ctx.lineTo(j, k);
        
        ctx.stroke();
        
        j += 20

    }

}

lol(myCanvasWidth, 0);

    