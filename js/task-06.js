// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputForm = document.querySelector('#validation-input');
const inputLength = inputForm.getAttribute('data-length');

inputForm.addEventListener('blur', inputFormLoseFocusHandler);

function inputFormLoseFocusHandler() {
    if(inputLength == inputForm.value.length) {
        inputForm.classList.remove('invalid');
        inputForm.classList.add('valid')
    } else {
        inputForm.classList.remove('valid');
        inputForm.classList.add('invalid')
    }
};