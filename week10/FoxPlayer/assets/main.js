'use strict';

const body = document.querySelector('body');
const audio = document.querySelector('audio');

audio.addEventListener('onloadstart', event => {
  alert('onloadstart happened');
});
