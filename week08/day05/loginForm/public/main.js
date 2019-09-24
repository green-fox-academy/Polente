'use strict';

const form = document.querySelector('form');
const eye = document.querySelector('.pass');
const forgot = document.querySelector('.forgot');
const modal = document.querySelector('.modal');
const requestBTN = document.querySelector('#request');
const closeButton = document.querySelector('.close-button');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const secretCode = Math.floor(Math.random() * 9000 + 1000);
//   fetch('/api/details', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       username: username.value,
//       password: password.value,
//       secretCode: secretCode
//     })
//   }).then(res => console.log(res));
//   form.reset();
// });
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
    // .then(res => res.json())
    .then(console.log);
  form.reset();
});

eye.addEventListener('click', function() {
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
});

requestBTN.addEventListener('click', e => {
  e.preventDefault();
  fetch('/api/secret', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      loginname: loginname.value,
      secretCode: secret.value
    })
  })
    .then(res => res.json())
    .then(showPassword);
});

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

forgot.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

function showPassword(data) {
  let p = document.querySelector('.recievedPassword');
  let popUP = document.querySelector('.popUP');

  p.innerHTML += `<br> <br> ${data.password}`;
  popUP.style.display = 'none';
  p.style.display = 'block';
}
