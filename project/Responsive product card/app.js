let red = document.getElementById('red');
let black = document.getElementById('black');
let orange = document.getElementById('orange');
let productImage = document.getElementsByTagName('img')[0];
let btnColor = document.querySelector('.buy-btn');

red.addEventListener('click', () => {
    productImage.setAttribute('src', '71du0S7jVNL._SY695._SX._UX._SY._UY_.jpg');
    btnColor.style.backgroundColor = '#E6404D';
});

orange.addEventListener('click', () => {
    productImage.setAttribute('src', '71EF0uE9EVL._UY695_.jpg');
    btnColor.style.backgroundColor = '#FE7427';
});

black.addEventListener('click', () => {
    productImage.setAttribute('src', '71nLQl-PxML._SY695._SX._UX._SY._UY_.jpg');
    btnColor.style.backgroundColor = 'black';
});
