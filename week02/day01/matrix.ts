'use strict'
export

/* let matrix: number [][]= [];

let size: number= 5;

for(let index: number= 0; index<size; index++){

    let row: number[]=[];
        for(let inner: number=0; inner<size; inner++){
            if(inner===index){

                row.push(1);
            }else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    console.log(matrix)
    matrix.forEach(function(row){
        console.log(row.join(" "))
    }) */



    let matrix: number[][] =[];

    let size: number= 5;

    for(let index= 0; index<size; index++){

        let row: number[]=[]
            for(let inner: number= 0; inner<size; inner++){

                if(inner===index){
                    row.push(1);
                }else{
                    row.push(0);
                }
            }
            matrix.push(row);
            
    }
        console.log(matrix);