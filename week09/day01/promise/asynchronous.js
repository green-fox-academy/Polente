'use strict'

let promise = new Promise((fulfilled, reject) => {
    fulfilled('PROMISE VALUE')
});

promise.then(console.log);
console.log('MAIN PROGRAM');