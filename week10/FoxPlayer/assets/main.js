'use strict';

const body = document.querySelector('body');
const audio = document.querySelector('audio');
const form = document.querySelector('form');
const playlists = document.querySelector('.playlists');

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

// function sendPOSTRequest(url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         callback(JSON.parse(xhr.responseText));
//       } else {
//         console.log('something is wrong mate');
//       }
//     }
//   };
//   xhr.open('POST', url);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send();
// }

function setAudioSRC(path) {
  audio.setAttribute('src', path);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        setAudioSRC(JSON.parse(xhr.responseText)[0].path);
      } else {
        console.log('something is wrong mate');
      }
    }
  };
  xhr.open('POST', '/playlists');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ song: song.value }));
  form.reset();
});

function appendPtag(parent) {
  let p = document.createElement('p');
  // p.innerHTML =
  parent.appendChild(p);
}
