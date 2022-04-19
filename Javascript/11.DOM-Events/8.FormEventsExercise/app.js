

const form = document.querySelector('form');
const inputProduct = document.querySelector('#product');
const inputQty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valueProduct = inputProduct.value;
    const valueQty = inputQty.value;
    const newLI = document.createElement("li");
    newLI.innerText = `${valueQty} ${valueProduct}`;
    list.appendChild(newLI);
    inputProduct.value = "";
    inputQty.value = "";
});
