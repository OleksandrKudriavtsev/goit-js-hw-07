// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const btnDecr = document.querySelector('[data-action="decrement"]');
// const btnDecr = buttons[0].dataset.action;
const btnIncr = document.querySelector('[data-action="increment"]');
// const btnIncrement = buttons[1].dataset.action;
const value = document.querySelector("#value");

let counterValue = 0;

const increment = () => (value.textContent = counterValue += 1);
const decrement = () => (value.textContent = counterValue -= 1);

btnDecr.addEventListener("click", decrement);
btnIncr.addEventListener("click", increment);
