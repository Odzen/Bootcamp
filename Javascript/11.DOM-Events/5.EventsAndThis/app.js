const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g} , ${b})`;
};


const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

// Colorize the buttons
for (let button of buttons) {
    button.addEventListener('click', colorize)
};

// Colorize the H1
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
};

// Using of this
function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}