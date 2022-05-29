'use strict';
const formInputEl = document.querySelector('#name-input');
const spanOutputEl = document.querySelector('#name-output');
formInputEl.addEventListener('input', event => {
    spanOutputEl.textContent = event.target.value;
  });