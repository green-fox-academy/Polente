'use strict'

const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const login = document.querySelector('input[type = submit]')
const eye = document.querySelector('.pass');

form.addEventListener('submit', e => {

    e.preventDefault();
    form.reset();
})

eye.addEventListener('click', function () {

    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
})