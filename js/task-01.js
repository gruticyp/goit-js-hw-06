"use strict";
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

let listEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listEl.length}`)

for (let el of listEl) {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`)
}