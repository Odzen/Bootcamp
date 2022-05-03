
const {PI, square} = require('./math');

// Requiring another directory looking for index.js
const cats = require('../4.RequiringDirectory');
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats);
console.log(PI);

console.log(square(9));

