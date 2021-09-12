// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов 
// очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputForm = document.querySelector('#controls');
const inputArea = inputForm.firstElementChild;
const createBtn = inputArea.nextElementSibling;
const clearBtn = inputForm.lastElementChild;

createBtn.addEventListener('click', () => createBoxes(inputForm));
clearBtn.addEventListener('click', destroyBoxes);

function createBoxes(value) {
        const basicSize = 30;
        const fragment = document.createDocumentFragment(); 

    for(let i = 0; i <= value; i += 1) {
        const size = basicSize + i * 10;
        const div = document.createElement('div');
            div.style.width = `${size}px`;
            div.style.backgroundColor = `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        
        fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
};

function destroyBoxes() {
    boxes.innerHTML = '';
  }

function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
 };