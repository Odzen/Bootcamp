// Array methods

//Pushing to the end
console.log('Push');
let movieLine = ['tom', 'nancy'];

movieLine.push('oliver');

console.log(movieLine);

movieLine.push('harry', 'hermione');

console.log(movieLine);

// Pop, remove from the end, doesn't require an arg
console.log('Pop');
movieLine.pop();
console.log(movieLine);

//Shift, remove from the start
console.log('Shift');
movieLine.shift();
console.log(movieLine);

//Unshift, add to the start
console.log('Unshift');
movieLine.unshift('Juan');
console.log(movieLine);

//concat
console.log('Concat');
let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 5];
let array3 = array1.concat(array2);
console.log(array3);

//includes  : true or false
console.log('includes');
let arrayInclude = [1, 2, 3, 4];
console.log(arrayInclude.includes(1));

//indexOf
console.log('indexOf');
let arrayIndex = [1, 2, 3, 4];
console.log(arrayIndex.indexOf(1));
console.log(arrayIndex.indexOf(5));

//reverse: in place
console.log('reverse');
let arrayReverse = [1, 2, 3, 4];
console.log(arrayReverse.reverse());
