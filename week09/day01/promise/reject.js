'use strict'
let promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        reject(Error('REJECTED!'))
    }, 300);
});

function onReject() {
    console.log('REJECTED!');
};

promise
    .then(null, onReject)
    .catch();