const button = document.querySelector("button");

button.addEventListener('click', () => {
    const h1 = document.querySelector('h1');
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (isLess25(r) || isLess25(g) || isLess25(b))
        document.querySelector('h1').style.color = 'white';
    else
        document.querySelector('h1').style.color = 'black';
    return `rgb(${r}, ${g} , ${b})`;
};

const isLess25 = (number) => {
    if (number < 60)
        return true
    return false
};