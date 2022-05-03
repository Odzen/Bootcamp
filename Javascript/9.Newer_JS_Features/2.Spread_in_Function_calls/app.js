//SPREAD

/*
Spread Syntax Allows an iterable such as an array to be expanded in places where zero
or more arguments (for function calls) or elements (for array literals) are expected,
or an object expression to be expanded in places where zero or more key-value pairs(for object literals)
are expected
*/

// SPREAD - FUNCTION CALLS

const nums = [9, 3, 2, 8];

//Printing with and without spread
console.log(nums) // It prints the array [9, 3, 2, 8]
console.log(...nums) // It prints each number of the array, separated by spaces -- 9 3 2 8

console.log(Math.max(nums)); //NaN

//Using spread, spread array into separated numbers
console.log(Math.max(...nums)); //9
//Same as calling Math.max(9,3,2,8)

console.log(...'hello'); // h e l l o


// SPREAD - ARRAY LITERALS
// Spread the elements from one array into a new array


const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

console.log([...nums1, ...nums2]);
//[1,2,3,4,5,6]

console.log(['a', 'b', ...nums2]);
//['a', 'b'1, 4, 5, 6]

console.log([...nums1, ...nums2, 7, 8, 9]);
// [1,2,3,4,5,6,7,8,9]

//Spread a string and transform it to array
const helloString = 'hello';
console.log([...helloString]); //['h', 'e','l','l','o']


//SPREAD - OBJECT LITERALS

//Copies properties from one object into another object literal

const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Canine', furry: true };

const dog = { ...canine, isPet: true };
console.log(dog); // {family: 'Canine', furry:true, ispet:true}

//Other example

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
console.log(newUser);

