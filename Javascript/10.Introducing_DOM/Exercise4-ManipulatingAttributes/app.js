/*
Select the image element and
    - change its source to this url https://devsprouthosting.com/images/chicken.jpg
    - change its alt text to be "chicken"
*/

const image = document.querySelector('img');

image.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
image.alt = 'chicken';
