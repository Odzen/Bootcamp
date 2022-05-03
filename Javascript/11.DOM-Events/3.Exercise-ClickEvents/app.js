/*
Add click listener to each button
    - When the hello button is clicked, you should console.log "hello"
    - When the goodbye button is clicked, you should console.log "goodbye"
*/

const bt1 = document.querySelector("#hello");
const bt2 = document.querySelector("#goodbye");

bt1.addEventListener('click', () => {
    console.log("hello");
});


bt2.addEventListener('click', () => {
    console.log("goodbye");
});