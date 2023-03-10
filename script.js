let calc = document.querySelector('#calc');
let display = document.querySelector('#display');
let keys = document.querySelectorAll('.key');
let reset = document.querySelector('#reset');


let exp = '';

for (let key of keys) {
    key.addEventListener('click', (evt) => {
        evt.preventDefault();
        exp = exp + key.textContent;
        display.value = exp;
    })
}
reset.addEventListener('click', (evt) => {
    evt.preventDefault();
    display.textContent = '0'
})