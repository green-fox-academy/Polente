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
    // console.log(rows.length);
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

app.get('/a/:alias', (req, res) => {
  connection.query(
    'SELECT alias FROM Links where alias=?',
    req.params.alias,
    (err, rows) => {
      if (rows.length > 0) {
        connection.query(
          'SELECT hitCount FROM Links where alias=?',
          req.params.alias,
          (err, rows) => {
            let newCount = rows[0].hitCount + 1;
            connection.query(
              'UPDATE Links SET hitCount=? WHERE alias=?',
              [newCount, req.params.alias],
              (err, rows) => {
                if (err) {
                  console.log(err.message);
                } else {
                  res.send({ message: 'hitCount increased' });
                }
              }
            );
          }
        );
      } else {
        res.status(404);
      }
    }
  );
});

app.get('/api/links', (req, res) => {
  connection.query(
    'SELECT id, url, alias, hitCount FROM Links',
    (err, rows) => {
      res.send(rows);
    }
  );
});

app.delete('/api/links/:id', (req, res) => {
  connection.query(
    'SELECT * FROM Links where id=?',
    req.params.id,
    (err, rows) => {
      if (rows.length > 0) {
        connection.query(
          'SELECT * FROM Links where secretCode=?',
          req.body.secretCode,
          (err, rows) => {
            connection.query(
              'DELETE FROM Links WHERE id=? AND secretCode=?',
              [req.params.id, req.body.secretCode],
              (err, rows) => {
                if (err) {
                  console.log(err.message);
                } else {
                  res.send({
                    message: 'You have successfully deleted your alias.'
                  });
                }
              }
            );
          }
        );
      }
    }
  );
});

module.exports = app;
