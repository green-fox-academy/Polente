'use strict'
/* 
1)

setTimeout(() => {}, 300);

console.log('TIMED OUT!');

2)---------------------------------------------

let promise = new Promise(function (fulfilled, reject) {
    setTimeout(() => {
        fulfilled('FULFILLED!')
    }, 300);
})

promise.then(console.log);

3)---------------------------------------------

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

4)---------------------------------------------

let promise = new Promise(function (fulfilled, reject) {
    fulfilled('I FIRED');
    reject(new Error('IDID NOT FIRE'))
});

function onRejected(error) {
    console.log(error)
}

promise.then(console.log, onRejected);

5)---------------------------------------------

let promise = new Promise((fulfilled, reject) => {
    fulfilled('PROMISE VALUE')
});

promise.then(console.log);
console.log('MAIN PROGRAM');

6)---------------------------------------------

let promise = Promise.reject('REJECTION MESSAGE')

promise.catch(console.log)

7)---------------------------------------------

first().then(second)
    .then(console.log);

8)---------------------------------------------

    let attachTitle = function (argument) {
    return 'DR. ' + argument
}
let promise = new Promise((fulfill, reject) => fulfill('MANHATTAN'))

promise.then(attachTitle).then(console.log)

9)---------------------------------------------

let parsePromised = function (json) {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(json))
        } catch (error) {
            reject(error.message)
        }
    })
}

parsePromised(process.argv[2])
    .then(console.log)
    .catch(console.log)

10)---------------------------------------------

function alwaysThrows() {
    throw Error('OH NOES');
}

function itirate(argument) {
    console.log(argument);
    return argument + 1;
}

let promise = new Promise((fulfill, reject) => {
    fulfill(1);
});

promise
    .then(itirate)
    .then(itirate)
    .then(itirate)
    .then(itirate)
    .then(itirate)
    .then(alwaysThrows)
    .then(itirate)
    .then(itirate)
    .then(itirate)
    .then(itirate)
    .then(itirate)
    .then(itirate)
    .catch(function (error) {
        console.log(error.message);
    }); */