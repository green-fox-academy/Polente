'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.listen(`${PORT}`, (req, res) => {
  console.log(`App is running on port: ${PORT}`);
});

// app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
