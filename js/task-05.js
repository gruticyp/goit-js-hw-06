'use strict';
const formInputEl = document.querySelector('#name-input');
const spanOutputEl = document.querySelector('#name-output');
formInputEl.addEventListener('input', event => {
    if (formInputEl.value.length === 0) {
      spanOutputEl.textContent = "Anonymous"
    } else {
     spanOutputEl.textContent = event.target.value;
    }
  });