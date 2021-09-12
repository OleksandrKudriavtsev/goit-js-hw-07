// Напиши скрипт для создания галлереи изображений по массиву данных.
// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


const gallery = document.querySelector('ul');
gallery.classList.add('list_images');
// class ...
gallery.style.listStyle = 'none';
gallery.style.marginTop = '0';
gallery.style.padding = '0';
gallery.style.textAlign = 'center';

console.log(gallery);

const itemEl = ({url, alt}) => {
    return `<li><img class="item_images" src=${url} alt=${alt} width="70%" heigth="70%"></li>`;
};

const listEl = images.map(itemEl).join('');
console.log(listEl);

gallery.insertAdjacentHTML('beforeend', listEl);
