// Please write some JavaScript to make them rainbow-colored! 
// In app.js you'll find an array of color names called 'colors' ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// Select all spans, itereate over them and assign them each one of the colors from the colors array


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const allSpans = document.querySelectorAll('span');

let color = 0;
for (let spanElement of allSpans) {
    spanElement.style.color = colors[color];
    color += 1;
}