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
  // const xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = () => {
  //   if (xhr.readyState === XMLHttpRequest.DONE) {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       setAudioSRC(JSON.parse(xhr.responseText)[0].path);
  //     } else {
  //       console.log('something is wrong mate');
  //     }
  //   }
  // };
  // xhr.open('POST', '/playlists');
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.send(JSON.stringify({ song: song.value }));

  fetch('/playlists', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ song: song.value })
  })
    .then(res => res.json())
    .then(res => setAudioSRC(res[0].path));

  form.reset();
});

function renderPlaylists() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200) {
        appendPtag(JSON.parse(xhr.responseText));
      } else {
        console.log('something fishy is going on');
      }
    }
  };
  xhr.open('GET', '/playlists');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}

function appendPtag(data) {
  console.log(data);
  playlists.insertAdjacentHTML('beforeend', '<br />');

  for (let i = 0; i < data.length; i++) {
    playlists.insertAdjacentHTML('beforeend', data[i].title + '<br />');
  }
}

fetch('/playlists')
  .then(res => res.json())
  .then(appendPtag);
