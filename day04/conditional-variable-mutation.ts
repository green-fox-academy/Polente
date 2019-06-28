"use strict";

let a: number= 24;
let out: number= 0;

if(a % 2 == 0){

    out ++
    console.log(out)
}
else{

    console.log("A is an odd number, OUT will not be increased")
}

let b: number = 13;
let out2: string = '';

if(10 < b && b < 20){

    out2 = "Sweet!"
        

} 
else if(10 > b){

    out2 = "Less!"
}
else if(b > 20){

    out2 = "More!"
}
console.log(out2)

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

while (credits >= 50 && isBonus==false) {


    c = c-2;
    credits = credits-1;
    while(credits < 50 && isBonus==false) {

        c = c-1
        credits = credits-1
    
    console.log(c);
    console.log(credits);
    console.log(isBonus);
    while(c == 0 && isBonus==false){

        isBonus = true
console.log(c);
console.log(credits);
console.log(isBonus);
        }
    }       
}



let d: number =  8;
let time: number = 120;
let out3: string = '';


if(d%4 == 0 && time <= 200){

    out3 = "Check"

}
else if(time > 200){

    out3 = "Time out!"

} else{
    out3 = "Run forest run!"
}
    console.log(out3)


