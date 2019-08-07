const express = require('express');
const app = express();
const PORT = 3000;
const todos = [
    'get up',
    'survive',
    'go back to bed',
];

app.set('view engine', 'ejs');

app.listen(PORT, (req, res) => {
    console.log(`Listening port number: ${PORT}`)
});

app.get('/', (req, res) => {
    res.render('home', {
        todo: todos
    });
});