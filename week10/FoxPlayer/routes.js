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
  console.log(req.body);
  connection.query(
    'INSERT INTO Playlists(title,playlist_id) VALUES(?,6)',
    req.body.title,
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(rows);
      }
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

app.post('/tracks', (req, res) => {
  connection.query(
    'SELECT name, duration FROM Tracks WHERE playlist_id = ?',
    req.body.playlist_id,
    (err, rows) => {
      res.send(rows);
    }
  );
});
app.get('/tracks/:id', (req, res) => {
  connection.query(
    'SELECT name FROM Tracks where track_id =?',
    req.params.id,
    (err, rows) => {
      res.send(rows);
    }
  );
});

app.get('/tracks', (req, res) => {
  connection.query('SELECT * FROM Tracks', (err, rows) => {
    res.send(rows);
  });
});

module.exports = app;
