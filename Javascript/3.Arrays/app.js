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

//slice: copy of an portion, includes the start but not the stop
console.log('slice');
let arraySlice = [1, 2, 3, 4];
console.log(arraySlice.slice(2));
console.log(arraySlice.slice(1, 3));
// last 2 items
console.log(arraySlice.slice(-2));

//splice: changes the contents of an array
console.log('splice');
let arraySplice = [1, 2, 3, 4];
//Delete the 3 with splice
console.log(arraySplice.splice(2, 1));
console.log(arraySplice);
//Delete the 2 and 4 with splice
console.log(arraySplice.splice(1, 2));

console.log(arraySplice);

//insert with splice
arraySplice.splice(0, 0, 5);
console.log(arraySplice);

//Sort
console.log('sort');
const months = ['March', 'June', 'Feb'];
months.sort();
console.log(months);

const score = [1, 4, 2, -3, 200, 2342, -234423];
score.sort();
console.log(score);

// Equality in arrays
console.log('=== Equality');
let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
console.log(a1 === a2);
let a3 = a1;
console.log(a1 === a3);
a3.push(4);
//When I change one, I change the other, it is an alias, the === works
// they're pointing to the same space in memory
console.log(a3);
console.log(a1);

//Const
console.log('Const');
const nums = [1, 2, 3];
// const nums = [1, 2, 3]; error
nums.push(4); // no error, all good
// no error as long as the reference reamins the same

//Nested arrays, matriz
console.log('Nested arrays');
const colors = [
  ['red', 'crimson'],
  ['red', 'good'],
  ['red', 'l'],
];
console.log(colors);
console.log(colors[0][1]);
