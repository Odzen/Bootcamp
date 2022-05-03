
const formTest = document.querySelector('form');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

formTest.addEventListener("submit", function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    input.value = "";
});

