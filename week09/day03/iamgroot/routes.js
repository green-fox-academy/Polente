const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  console.log(Object.values(req.query));
  if (Object.keys(req.query).length === 0) {
    res.sendStatus(400);
    return;
  } else if (Object.values(req.query)[0] === '') {
    res.json({ error: 'I am Groot!' });
  } else {
    res.json({ received: req.query.message, translated: 'I am Groot!' });
  }
});

module.exports = app;
