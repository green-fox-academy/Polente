'use strict';

const buttons = document.querySelector('nav');
const img = document.querySelector('.img-inspector');

let cordinateX = 0;
let cordinateY = 0;
let size = 200;

function eventSelector(event) {

  switch (event.target.getAttribute('data-direction')) {
    case 'up':
      img.style.backgroundPositionY = `${cordinateY -= 20}px`
      break;
    case 'down':
      img.style.backgroundPositionY = `${cordinateY += 20}px`
      break;
    case 'left':
      img.style.backgroundPositionX = `${cordinateX -= 20}px`
      break;
    case 'right':
      img.style.backgroundPositionX = `${cordinateX -= 20}px`
      break;
    case 'in':
      img.style.backgroundSize = `${size *= 1.2}%`
      break;
    case 'out':
      img.style.backgroundSize = `${size *= 0.8}%`
      break;
  }
}

buttons.addEventListener('click', eventSelector);

// .hasAttribute('')
//.getAttribute('') ===