'use strict';

const form = document.querySelector('form');
const fail = document.querySelector('.fail');
const done = document.querySelector('.done');

function elementVisible(element) {
  if (element === 'done') {
    done.style.display = 'block';
    fail.style.display = 'none';
  } else if (element === 'fail') {
    fail.style.display = 'block';
    done.style.display = 'none';
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  fetch('/api/links', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: url.value, alias: alias.value })
  })
    .then(resp => {
      if (resp.status != 201) {
        elementVisible('fail');
      } else {
        elementVisible('done');
      }
      return resp;
    })
    .then(res => res.json());
  form.reset();
});
