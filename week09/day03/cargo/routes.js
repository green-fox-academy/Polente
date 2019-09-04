const express = require('express');
const app = express();

app.get('/rocket', (req, res) => {
  res.json({
    caliber25: 0,
    caliber30: 0,
    caliber50: 0,
    shipstatus: 'empty',
    ready: false
  });
});

app.get('/rocket/fill', (req, res) => {
  let status;
  const statNum = Math.floor((req.query.amount / 12500) * 100);
  switch (true) {
    case statNum > 0 && statNum < 100:
      status = 'empty';
      break;
    case statNum === 100:
      status = 'full';
      break;
    case statNum > 100:
      status = 'overload';
      break;
  }
  res.json({
    received: req.query.caliber,
    amount: req.query.amount,
    shipstatus: status,
    ready: statNum === 100
  });
});

module.exports = app;
