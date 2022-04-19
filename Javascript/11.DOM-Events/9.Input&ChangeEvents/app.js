
const input = document.querySelector('input');
const h1 = document.querySelector('h1');


// CHANGE
// To know if the input was changed or not, it only appears when I click outside after the change
// input.addEventListener('change', function (e) {
//     console.log("Changed");
// });

// INPUT EVENT
// it fires as soon a I type into it, if the content changes, that is
// already an input event
input.addEventListener('input', function (e) {
    h1.innerText = input.value;
    console.log("input something");

});