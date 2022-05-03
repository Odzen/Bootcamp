/* 
EXERCISE 2
Select all Elements that have the class of "done" and save them 
in a variable called doneTodos

Select the one checkbox and save it in a variable called checkbox. There is more
than one input element on the page. You'll need to select using the type attribute
*/

const doneTodos = document.querySelectorAll('.done');
const checkbox = document.querySelector('input[type="checkbox"]');

