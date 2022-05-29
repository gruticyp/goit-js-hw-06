'use strict';
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
const btnMinusEl = document.querySelector('button[data-action="decrement"]');
const btnPlusEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

const incr = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
btnMinusEl.addEventListener('click', incr);

const decr = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};
btnPlusEl.addEventListener('click', decr);