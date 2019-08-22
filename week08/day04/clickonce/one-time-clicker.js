'use strict'

const button = document.querySelector('button');

function event(e) {
    console.log(e.timeStamp)
    button.removeEventListener('click', event);
}

button.addEventListener('click', event);