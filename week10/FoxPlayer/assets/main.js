'use strict';

const body = document.querySelector('body');
const audio = document.querySelector('audio');
const form = document.querySelector('form');
const playlists = document.querySelector('.playlists');
const tracks = document.querySelector('.tracks');
const current = document.querySelector('.current');
const plusButton = document.querySelector('.fa-plus');

body.addEventListener('click', e => {
  switch (e.target.innerHTML) {
    case 'Night Owl':
      setAudioSRC('/music/Tours_-_01_-_Enthusiast.mp3');
      fetch('/tracks/2')
        .then(res => res.json())
        .then(appendCurrent);
      break;

    case 'Purple Drift':
      setAudioSRC('/music/Organoid_-_09_-_Purple_Drift.mp3');
      fetch('/tracks/3')
        .then(res => res.json())
        .then(appendCurrent);
      break;

    case 'Enthusiast':
      setAudioSRC('/music/Broke_For_Free_-_01_-_Night_Owl.mp3');
      fetch('/tracks/4')
        .then(res => res.json())
        .then(appendCurrent);
      break;

    case 'All Tracks':
      fetch('/tracks')
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

plusButton.addEventListener('click', e => {
  let listTitle = prompt('Please provide a playlist name');
  // console.log(listName.toLocaleLowerCase());
  fetch('/playlists', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: listTitle.toLocaleLowerCase() })
  })
    .then(res => res.text())
    .then(console.log);
});

function addPlaylist(data) {}

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
function appendCurrent(data) {
  let list = document.querySelectorAll('.current > p');
  if (list.length == 0) {
    let p = document.createElement('p');
    p.innerHTML = data[0].name;
    current.appendChild(p);
    console.log(list[0]);
  } else {
    list[0].innerHTML = data[0].name;
  }
}

fetch('/playlists')
  .then(res => res.json())
  .then(appendPlaylists);

// fetch('/tracks')
//   .then(res => res.json())
//   .then(appendTracks);
