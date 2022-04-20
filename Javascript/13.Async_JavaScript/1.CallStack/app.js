
// CALL STACK

// Functions tha call other functions
const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);

// Calls square function three times
const isRigthTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
};

let result = isRigthTriangle(3, 4, 5);
let result2 = isRigthTriangle(3, 4, 8);
console.log(result); // true
console.log(result2); // false