'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.static('public'));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'burrito',
  database: 'LoginForm'
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/logged', (req, res) => {
  res.sendFile(__dirname + '/public/logged.html');
});

app.post('/api/login', (req, res) => {
  const targetURL = 'http://localhost:3000/logged';
  connection.query(
    'SELECT * FROM Details WHERE username=?',
    [req.body.username],
    (err, rows) => {
      if (rows.length > 0) {
        if (rows[0].password == req.body.password) {
          res.redirect(targetURL);
        } else {
          res.send({ error: 'Invaliad username or password' });
        }
      } else {
        res.send({ error: 'Invaliad username or password' });
      }
    }
  );
});

app.post('/api/details', (req, res) => {
  connection.query(
    'INSERT INTO Details (username,password,secretID) VALUES (?,?,?)',
    [
      `${req.body.username}`,
      `${req.body.password}`,
      parseInt(req.body.secretCode, 10)
    ],
    (err, rows) => {
      if (err) {
        console.log(err.message);
        res.status(500).send({ error: 'error occured' });
      } else {
        // res.status(201);
        res.redirect('http://localhost:3000/logged');
      }
    }
  );
});

app.post('/api/secret', (req, res) => {
  connection.query(
    'SELECT * FROM Details where username=?',
    req.body.loginname,
    (err, rows) => {
      if (err) {
        console.log(err.message);
      } else {
        if (rows.length > 0) {
          if (rows[0].secretID == req.body.secretCode) {
            res.send({ password: rows[0].password });
          } else {
            res.send({ error1: 'Invalid username or secret code' });
          }
        } else {
          res.send({ error2: 'Invalid username or secret code' });
        }
      }
    }
  );
});

module.exports = app;
