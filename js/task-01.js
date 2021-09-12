// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 


const liCount = document.querySelectorAll('.item');
console.log(`В списке ${liCount.length} категории`);

for(let i = 0; i < liCount.length; i += 1) {
    let item = liCount[i];
console.log(`Категория`, item.firstElementChild.textContent);
console.log(`Кол-во элементов`, item.lastElementChild.children.length);
}