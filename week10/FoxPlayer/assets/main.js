'use strict';

const body = document.querySelector('body');
const audio = document.querySelector('audio');

audio.addEventListener('play', event => {
  console.log(`${event.type} happened`);
});
audio.addEventListener('loadstart', event => {
  console.log(`${event.type} happened`);
});
audio.addEventListener('progress', event => {
  console.log(`${event.type} happened`);
});
audio.addEventListener('ended', event => {
  console.log(`${event.type} happened`);
});

audio.setAttribute('src', './music/Organoid_-_09_-_Purple_Drift.mp3');
