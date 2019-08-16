'use strict'

const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`)
})
app.use(express.static('assests'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/doubling', (req, res) => {
    if (isNaN(Number(req.query.input))) {
        res.json({
            "error": "Please provide an input!"
        })
    }
    res.json({
        'recieved': Number(req.query.input),
        'result': Number(req.query.input * 2)
    })

})

app.get('/greeter', (req, res) => {
    if (req.query.name != undefined && req.query.title != undefined) {
        res.json({
            "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        })
    } else {
        res.json({
            "error": "Please provide a name and a title!"
        })
    }
})