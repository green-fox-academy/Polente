'use strict'

const DELAY = 2000;
const button = document.querySelector('button');
const text = document.querySelector('p');

button.addEventListener('click', function () {

    setTimeout(() => {
        text.innerText = `${DELAY/1000} seconds ellapsed`
    }, DELAY);
})