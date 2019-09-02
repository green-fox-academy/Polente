'use strict'

let promise = Promise.reject('REJECTION MESSAGE')

promise.catch(console.log)