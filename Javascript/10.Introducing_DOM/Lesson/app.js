// METHOD 1 - EXERCISE 1

// METHOD 2 -> getElementsByTagName()
// It returns a collection that is not an array, you can do indexing
// , length, iterating. But not all the methods in an usual array, for example, mapping

const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    console.log(img.src);
}

//Manipulate the images and changing them
// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }


//The methods return Elements

// METHOD 3 -> getElementsByClassName

const squareImages = document.getElementsByClassName('square');

//Change only the last 3 images that have the same class
for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// IF THE TAG OR CLASS DOES NOT EXITS, WE DON'T GET NULL, WE GET AN
// EMPTY COLLECTION. In getElementById() we get NULL or the Element


// METHOD 4 --> QUERY SELECTOR
// One method that combines the previous 3 methods
// A newer all-in-one method to select a single element
// querySelector just gives us the first match

// WIth Id, use #
const redId = document.querySelector('#red');

// With tags it's the same
const queryParagraph = document.querySelector('p'); // It returns the first paragraph
const tagParagraph = document.getElementsByTagName('p'); // It returns a collection of all paragraphs

// With classes, use .  - - you have to put the dot in querySelector
const classQuery = document.querySelector('.square'); // First match
const classGetBy = document.getElementsByClassName('square'); // Collection

// Selecting for example the second img match with a more complex syntax (CSS)
const imgSecond = document.querySelector('img:nth-of-type(2)');

// Other examples with anchor tags and CSS
const anchorTag = document.querySelector('a[title = "Java"]');


// METHOD 4 --> QUERY SELECTOR ALL
// RETURNS A COLLECTION, NOT ONLY THE FIRST MATCH
const allPTags = document.querySelectorAll('p');

// Anchor tags nested inside paragraphs, with CSS
const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}


// INNER TEXT
// It's what it is between the opening and closing tags, is something it's hidden, it doesn't show it
const inner = document.querySelector('p').innerText;
console.log(inner);

//document.querySelector('p').innerText = 'lololo' // I could change the text

//TEXT CONTENT
// Return every piece of content inside, if something it's hidden, it shows it anyway

//INNER HTML
// IT returns the markup with the tags, not only the text

const innerHTML = document.querySelector('p').innerHTML;
console.log(innerHTML);

//ATRIBUTES

// id
console.log(document.querySelector('#banner').id); // Should return banner

//src
document.querySelector('#banner').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';

//href
const firstLink = document.querySelector('a');
console.log(firstLink.href); // Should print the link, the long format
console.log(firstLink.getAttribute('href')); // Should print the link in short format

//title
console.log(document.querySelector('a').title); // Should return the title of the anchor tag


//Another example with set attrbute

const input = document.querySelector('input[type="text"]');
console.log(input.type); // text
input.type = 'password';
console.log(input.type); // password

input.setAttribute('type', 'color');



//WORKING WITH STYLES

const h1 = document.querySelector('h1');
console.log(h1.style); // Contains CSS properties, 

console.log(h1.style.color);//not contains the current style, just an wmpty string ""

//Read from CSS
const computedStyle = window.getComputedStyle(h1) // Object
console.log(computedStyle.color) // Read from the CSS object rgb(128, 128, 0)


//WE can use STYLE object to change the CSS balues
h1.style.fontSize = '3em'
h1.style.color = 'green'
h1.style.border = '2px solid pink'

//Better way to apply new styles
