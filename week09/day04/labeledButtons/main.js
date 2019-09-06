'use strict';

const button = document.querySelector('button');
const arrow = document.querySelector('.arrow');
const trash = document.querySelector('.trash');
const question = document.querySelector('.question');
const confirm = document.querySelector('.confirm');
const spanDelete = document.querySelector('.delete');
const spanQuestion = document.querySelector('.questionmark');
const done = document.querySelector('.done');

button.addEventListener('click', event => {
  switch (event.target.getAttribute('class')) {
    case 'far fa-trash-alt trash':
      trash.style.display = 'none';
      question.style.display = 'block';
      spanDelete.style.display = 'none';
      spanQuestion.style.display = 'inline-block';
      break;
    case 'fas fa-question question':
      question.style.display = 'none';
      confirm.style.display = 'block';
      spanQuestion.style.display = 'none';
      done.style.display = 'inline-block';
      arrow.style.display = 'none';
      setTimeout(() => {
        done.style.display = 'none';
      }, 2000);
      break;
  }
});
