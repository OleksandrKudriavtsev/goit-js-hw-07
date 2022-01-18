// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка

const list = document.querySelector("#categories");
const listItemCount = list.querySelectorAll(".item");
console.log(`В списке ${listItemCount.length} категории.`);

// Через for
for (let i = 0; i < listItemCount.length; i += 1) {
  let item = listItemCount[i];
  console.log(`Категория`, item.firstElementChild.textContent);
  console.log(`Кол-во элементов`, item.lastElementChild.children.length);
}

// Через forEach
listItemCount.forEach((item) => {
  console.log(`Категория`, item.firstElementChild.textContent);
  console.log(`Кол-во элементов`, item.lastElementChild.children.length);
});
