
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


// BEST OPTION -- ADD EVENT LISTENER
// Specify the event type and callback to run

const btn3 = document.querySelector('#v3');

// addEventListener recives a string that indicates the input and a function
// One click
btn3.addEventListener('click', () => {
    alert("Clicked the third button");
});
//double click
btn3.addEventListener('dblclick', () => {
    alert("Clicked the third button, twice");
});
//mouseup, when I finished to pressing the click on the mouse
btn3.addEventListener('mouseup', () => {
    alert("Clicked mouseup method");
});
