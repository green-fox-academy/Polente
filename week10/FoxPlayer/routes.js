'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

// app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'burrito',
  database: 'FoxPlayer'
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/playlists', (req, res) => {
  //   console.log(req.body);
  connection.query('SELECT * FROM Playlists', (err, rows) => {
    res.send(rows);
  });
});
app.post('/playlists', (req, res) => {
  //   console.log(req.body);
  connection.query(
    'SELECT * FROM Tracks where name=?',
    req.body.song,
    (err, rows) => {
      res.send(rows);
    }
  );
});

app.get('/playlists/:id', (req, res) => {
  connection.query(
    'SELECT * FROM Playlists where playlist_id =?',
    req.params.id,
    (err, rows) => {
      res.send(rows);
    }
  );
});

module.exports = app;
