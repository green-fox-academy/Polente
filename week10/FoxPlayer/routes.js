'use strict';

const express = require('express');
const app = express();

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/playlists', (req, res) => {
  res.send(
    JSON.stringify([
      { id: 1, title: 'Favorites', system: 1 },
      { id: 2, title: 'Music for programming', system: 0 },
      { id: 3, title: 'Driving', system: 0 },
      { id: 5, title: 'Fox house', system: 0 }
    ])
  );
});

app.get('/playlists/:id', (req, res) => {
  console.log(req.params.id);
  switch (req.params.id) {
    case '1':
      res.send(JSON.stringify({ id: 1, title: 'Favorites', system: 1 }));
      break;
    case '2':
      res.send(
        JSON.stringify({ id: 2, title: 'Music for programming', system: 0 })
      );
      break;
    case '3':
      res.send(JSON.stringify({ id: 3, title: 'Driving', system: 0 }));
      break;
    case '5':
      res.send(JSON.stringify({ id: 5, title: 'Fox house', system: 0 }));
      break;
  }
});

module.exports = app;
