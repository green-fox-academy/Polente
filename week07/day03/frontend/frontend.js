'use strict'

const express = require('express');
const path = require('path')

const app = express();
const PORT = 8080;

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
    } else {
        res.json({
            'recieved': Number(req.query.input),
            'result': Number(req.query.input) * 2
        })
    }

});

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
});
app.get('/appenda/:word', (req, res) => {
    if (req.params.word != undefined) {
        res.json({
            "appended": req.params.word + 'a'
        })
    } else {
        res.status(404);
    }
});
app.post('/dountil/:action', (req, res) => {
    if (req.params.action === 'sum') {
        let sum = function (myNum) {
            if (myNum === 1) {
                return 1
            } else {
                return mynum + sum(myNum - 1)
            }
        }
        res.json({
            'result': sum(req.params.until)
        })
    };
    if (req.params.action === 'factor') {
        let factor = function (myNum) {
            if (myNum === 1) {
                return 1
            } else {
                return mynum * factor(myNum - 1)
            }
        }
        res.json({
            'result': factor(req.params.until)
        })
    };
});