'use strict';

const body = document.querySelector('body');
const audio = document.querySelector('audio');
const form = document.querySelector('form');
const playlists = document.querySelector('.playlists');
const tracks = document.querySelector('.tracks');

body.addEventListener('click', e => {
  switch (e.target.innerHTML) {
    case 'Night Owl':
      setAudioSRC('/music/Tours_-_01_-_Enthusiast.mp3');
      break;

    case 'Enthusiast':
      setAudioSRC('/music/Broke_For_Free_-_01_-_Night_Owl.mp3');
      break;

    case 'Purple Drift':
      setAudioSRC('/music/Organoid_-_09_-_Purple_Drift.mp3');
      break;
    case 'All Tracks':
      fetch('/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playlist_id: 0 })
      })
        .then(res => res.json())
        .then(appendTracks);
      break;
    case 'Favorites':
      fetch('/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playlist_id: 1 })
      })
        .then(res => res.json())
        .then(appendTracks);
      break;
    case 'Music for programming':
      fetch('/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playlist_id: 2 })
      })
        .then(res => res.json())
        .then(appendTracks);
      break;
    case 'Driving':
      fetch('/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playlist_id: 3 })
      })
        .then(res => res.json())
        .then(appendTracks);
      break;
    case 'Fox house':
      fetch('/tracks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playlist_id: 5 })
      })
        .then(res => res.json())
        .then(appendTracks);
      break;
  }
});

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

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   // const xhr = new XMLHttpRequest();
//   // xhr.onreadystatechange = () => {
//   //   if (xhr.readyState === XMLHttpRequest.DONE) {
//   //     if (xhr.status >= 200 && xhr.status < 300) {
//   //       setAudioSRC(JSON.parse(xhr.responseText)[0].path);
//   //     } else {
//   //       console.log('something is wrong mate');
//   //     }
//   //   }
//   // };
//   // xhr.open('POST', '/playlists');
//   // xhr.setRequestHeader('Content-Type', 'application/json');
//   // xhr.send(JSON.stringify({ song: song.value }));

//   fetch('/playlists', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ song: song.value })
//   })
//     .then(res => res.json())
//     .then(res => setAudioSRC(res[0].path));

//   form.reset();
// });

// function renderPlaylists() {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status >= 200) {
//         appendPlaylists(JSON.parse(xhr.responseText));
//       } else {
//         console.log('something fishy is going on');
//       }
//     }
//   };
//   xhr.open('GET', '/playlists');
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send();
// }

function appendPlaylists(data) {
  for (let i = 0; i < data.length; i++) {
    let p = document.createElement('p');
    p.innerHTML = data[i].title;
    playlists.appendChild(p);
  }
}
function appendTracks(data) {
  for (let i = 0; i < data.length; i++) {
    let p = document.createElement('p');
    p.innerHTML = data[i].name;
    tracks.appendChild(p);
  }
}

fetch('/playlists')
  .then(res => res.json())
  .then(appendPlaylists);

// fetch('/tracks')
//   .then(res => res.json())
//   .then(appendTracks);
