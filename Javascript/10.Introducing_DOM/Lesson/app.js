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
