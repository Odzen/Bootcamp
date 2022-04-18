/*
Create exactly 100 new button elements
Each button must have some text inside of it
Each button must be appended inside the container div
*/


for (let i = 0; i < 100; i++) {
    const newButton = document.createElement('button');
    newButton.innerText = "Hey!";
    const container = document.querySelector('#container');
    container.appendChild(newButton);
}
