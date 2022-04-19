
const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("Clicked!");
}

function scream() {
    console.log("AAAA");
}

btn.onmouseenter = scream;

// You could add a listener not only in buttons, but in any element

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1');
}