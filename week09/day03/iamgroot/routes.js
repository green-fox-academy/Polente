const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  if (req.query.message) {
    res.json({ received: req.query.message, translated: 'I am Groot!' });
  } else {
    res.json({ error: 'I am Groot!' });
  }
});

module.exports = app;
