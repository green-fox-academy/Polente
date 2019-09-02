'use strict'

let promise = new Promise(function (fulfilled, reject) {
    fulfilled('I FIRED');
    reject(new Error('IDID NOT FIRE'))
});

function onRejected(error) {
    console.log(error)
}

promise.then(console.log, onRejected);