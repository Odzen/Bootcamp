
const defaultMessage = "Enter Your Username";
const h1 = document.querySelector('h1');
const input = document.querySelector('#username');

input.addEventListener('input', (e) => {
    if (input.value) {
        console.log("Input");
        console.log(h1.innerText);
        h1.innerText = `Welcome, ${input.value}`;
    }
    else
        h1.innerText = defaultMessage;
});