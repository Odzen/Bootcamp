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
