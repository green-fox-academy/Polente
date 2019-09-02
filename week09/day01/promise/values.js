'use strict'

let attachTitle = function (argument) {
    return 'DR. ' + argument
}
let promise = new Promise((fulfill, reject) => fulfill('MANHATTAN'))

promise.then(attachTitle).then(console.log)