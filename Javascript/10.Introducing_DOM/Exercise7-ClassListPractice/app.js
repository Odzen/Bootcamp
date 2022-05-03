/*
In index there are 6 <li> elements, two of which have the 
'highlight' class applied to them

1. Invert which elements have the highlight class by using classList
2. Iterate over all the <li> elements and toggle the class of 'highlight'
on each one
*/

const allLi = document.querySelectorAll('li');
for (let liElement of allLi) {
    liElement.classList.toggle('highlight');
}
