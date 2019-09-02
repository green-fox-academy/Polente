'use strict'

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