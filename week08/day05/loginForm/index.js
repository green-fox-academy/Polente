'use strict'
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// app.use(express.urlencoded());
// app.use(express.json());

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
app.post('/send', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password);
    res.send('okay!');
});