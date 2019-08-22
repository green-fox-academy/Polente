'use strict'

const button = document.querySelector('button');

function counter() {
	let listItems = document.querySelectorAll('li');
	document.querySelector('.result').innerHTML = listItems.length;
}

button.addEventListener('click', counter);