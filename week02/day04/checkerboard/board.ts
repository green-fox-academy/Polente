'use strict';

const myCanvasWidth: number = 620;
const myCanvasHeigth: number = 620;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeigth;
const ctx = canvas.getContext('2d');

let size: number= 20

function boardDraw(a){

    for(let k:number=0; k<621; k++){
        
        
        ctx.fillRect(k*a*2, 0, a ,a)
        
    }
       

        for(let i: number=0; i<621; i++){
                
            ctx.fillRect(0, i*a*2, a ,a)
                 
                
         }
        

}
    boardDraw(size);
   



