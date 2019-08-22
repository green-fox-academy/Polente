'use strict'

const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})

const app = express();
const PORT = 3000;
let numbers = [1, 2, 5, 10]

app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'array.html'))
});
let doSum = function (inputArray) {
    return inputArray.reduce((prev, current) => prev + current)
}
let multiply = function (inputArray) {
    return inputArray.reduce((prev, current) => prev * current)
}
let double = function (inputArray) {
    return inputArray.map(el => el * 2)
}

let doMath = function (req, res) {
    let responseObj = {
        'what': req.body.what,
    }
    if (req.body.array === undefined) {
        res.json({
            'error': 'Please provide numbers.'
        })
    } else {

        switch (req.body.what) {
            case 'sum':
                responseObj['result'] = doSum(req.body.array);
                break;
            case 'multiply':
                responseObj['result'] = multiply(req.body.array);
                break;
            case 'double':
                responseObj['result'] = double(req.body.array);
                break;
            default:
                responseObj = {
                    'error': 'Please provide numbers.'
                }
        }

    }
    res.post(responseObj);
};

app.post('/array', urlencodedParser, (req, res) => {
    res.render('success', {
        data: req.body
    })
})