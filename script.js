let calc = document.querySelector('#calc');
let display = document.querySelector('#display');
let keys = document.querySelectorAll('.key');
let reset = document.querySelector('#reset');
let result = document.querySelector('#result');


let exp = '';

display.style.textAlign = 'right';

for (let key of keys) {
    key.addEventListener('click', (evt) => {
        evt.preventDefault();
        exp = exp + key.textContent;
        display.value = exp;
    })
}

result.addEventListener('click', (evt) => {
    exp = eval(display.value);
    display.value = exp;
    exp = '';
})

reset.addEventListener('click', (evt) => {
    evt.preventDefault();
    exp = '';
    display.value = '0';
})

