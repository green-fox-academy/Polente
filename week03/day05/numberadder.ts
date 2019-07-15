'use strict'

function numAdd(n: number): number {
   if(n===0){
       return 0;
   }
    return n + numAdd(n-1);
}

console.log(numAdd(5));