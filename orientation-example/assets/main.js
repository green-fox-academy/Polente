'use strict';

const form = document.querySelector('form');
const fail = document.querySelector('.fail');
const done = document.querySelector('.done');
const deleted = document.querySelector('.deleted');
const deleteButton = document.querySelector('.delete');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const deleteAlias = document.querySelector(`input[value='Delete'`);

function elementVisible(element) {
  if (element === 'done') {
    done.style.display = 'block';
    fail.style.display = 'none';
    deleted.style.display = 'none';
  } else if (element === 'fail') {
    fail.style.display = 'block';
    done.style.display = 'none';
    deleted.style.display = 'none';
  } else if ('deleted') {
    done.style.display = 'none';
    fail.style.display = 'none';
    deleted.style.display = 'block';
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

deleteAlias.addEventListener('click', e => {
  e.preventDefault();
  fetch(`/api/links/${Number(id.value)}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id.value,
      secretCode: secretCode.value
    })
  })
    .then(res => res.json())
    .then(console.log);
  toggleModal();
  elementVisible('deleted');
});

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

deleteButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
