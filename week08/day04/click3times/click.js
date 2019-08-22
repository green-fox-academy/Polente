'use strict'

const button = document.querySelector('button');
const text = document.querySelector('p')
let counter = 5;
const TIME = 1000;
let totalClicks = 0;
let timePassed = 0;

setInterval(() => {
    if (counter > 0) {
        counter--
        timePassed++
    }
}, TIME);

function writeText() {

    ++totalClicks
    if (counter === 0) {

        text.innerText = `${(TIME*timePassed)/1000} seconds elapsed and clicked ${totalClicks}`
        button.removeEventListener('click', writeText);
    }
}
button.addEventListener('click', writeText);