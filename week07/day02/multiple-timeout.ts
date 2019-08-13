'use strict'

setTimeout(function () {
    console.log('apple')
    setTimeout(function () {
        console.log('pear')
        setTimeout(function () {
            console.log('melon')
            setTimeout(() => {
                console.log('grapes')
            }, 5000);
        }, 3000)
    }, 1000)
}, 0)

// setTimeout(() => {
//     console.log('grapes')
//     setTimeout(() => {
//         console.log('melon')
//         setTimeout(() => {
//             console.log('pear')
//             setTimeout(() => {
//                 console.log('apple')
//             }, 0);
//         }, 1000);
//     }, 3000);
// }, 5000);