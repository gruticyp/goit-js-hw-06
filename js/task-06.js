 'use strict';
//  Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
const valueLengthEl = Number(inputEl.dataset.length);
console.log(valueLengthEl);
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === valueLengthEl) {
        inputEl.classList.remove('invalid'); 
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid'); 
    }
}) 