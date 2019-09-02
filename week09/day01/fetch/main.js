'use strict'

const btn = document.getElementById('btn');
const div = document.getElementById('jokes')

btn.addEventListener('click', function () {
    fetch('http://api.icndb.com/jokes/random')
        .then(response => response.json())
        .then(parsedResponse => div.insertAdjacentHTML('beforeend', parsedResponse.value.joke + "<br />"))
        .catch(error => console.log(error))
})