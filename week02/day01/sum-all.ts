'use strict'


let ai: number[]= [3, 4, 5, 6, 7]

let arrSum = function(arr){
    return arr.reduce(function(a,b){
      return a + b
    }, 0);
  }

  console.log(arrSum(ai))

  