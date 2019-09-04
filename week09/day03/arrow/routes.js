const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  if (Object.keys(req.query).length > 0) {
    if (req.query.time > 0 && req.query.distance >= 0) {
      res.json({
        distance: req.query.distance,
        time: req.query.time,
        speed: req.query.distance / req.query.time
      });
    }
  } else {
    res.sendStatus(400);
  }
});

module.exports = app;
