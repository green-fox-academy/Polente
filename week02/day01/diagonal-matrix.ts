'use strict'

/* let matrix: number[][] = [];


let size: number = 5

for (let outer = 0; outer < size; outer++) {

    let row: number[] = [];
        for(let inner: number = 0; inner < size; inner++){
          if (size - inner -1 === 0 ) {
            if(inner = outer){
                row.push(1);
            }else{
                row.push(0);}
            }
        }
            matrix.push(row);

}

    matrix.forEach(function(row){

        console.log(row.join(" "));
    }) */




let matrix: number[][] = [

];

let size: number = 5;
for (let index = 0; index < size; index++) {
  let row: number[] = [];
  for (let inner: number = 0; inner < size; inner++) {
    if (inner === index) {
      row.push(1);
    } else {
      row.push(0);
    }
  }
  matrix.push(row);
}

matrix.forEach(function (row) {
  console.log(row.join(" "));
})

console.log(matrix)