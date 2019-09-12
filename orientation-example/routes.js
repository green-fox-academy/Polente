'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.static('assets'));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'burrito',
  database: 'Orientation_Example'
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/links', (req, res) => {
  connection.query('SELECT * FROM Links', (err, rows) => {
    console.log(rows.length);
    res.send(rows);
  });
});

app.post('/api/links', (req, res) => {
  connection.query(
    'SELECT alias FROM Links where alias=?',
    req.body.alias,
    (err, rows) => {
      if (rows.length > 0) {
        res.status(400).send({ message: 'Alias already in use' });
      } else {
        const code = Math.floor(Math.random() * 9000 + 1000);
        connection.query(
          'INSERT INTO Links (url, alias, secretCode) VALUES(?,?,?)',
          [req.body.url, req.body.alias, code],
          (err, rows) => {
            if (err) {
              res.status(400).send(err.message);
            } else {
              res.status(201).send({ created: 'alias created' });
            }
          }
        );
      }
    }
  );
});

module.exports = app;
