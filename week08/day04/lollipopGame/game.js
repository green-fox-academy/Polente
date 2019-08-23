'use strict'

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const body = document.querySelector('body');
const button = document.getElementsByTagName('button');
let candyCounter = 0;
let lollipopCounter = 0;
let candySpeed = 1000;

function clickAction(event) {
    switch (event.target.className) {
        case 'create-candies':
            // console.log('hi')
            document.querySelector('.candies').innerText = candyCounter += 100
            break;
        case 'buy-lollypops':
            if (candyCounter >= 100) {
                candyCounter -= 100;
                ++lollipopCounter;
                document.querySelector('.lollypops').innerText += '🍭';
                document.querySelector('.candies').innerText = candyCounter;
            }
            if (lollipopCounter >= 10) {
                setInterval(() => {
                    document.querySelector('.candies').innerText = (candyCounter += Math.floor(lollipopCounter / 10));
                }, candySpeed);
            }
            break;
        case 'candy-machine':
            candySpeed = candySpeed / 10;
            lollipopCounter = 0;
            break;

    }
}
body.addEventListener('click', clickAction)