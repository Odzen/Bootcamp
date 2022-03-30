//Sytanctically compact alternative to a regular function expression

const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

//Alternative
//const add = function (x,y){
//    return x+y;
//}

console.log(sum(3, 4));
console.log(square(4));

//With no arguments, with empty arguments

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDie());

//Exercise

const greet = (name) => {
    return "Hey " + name + "!";
}
console.log(greet("Harry"));

//Implicit Returns, make them even more compact
//You can eliminate the return and change {} with ()
//ONLY works when it is inside just one_line or expression inside

// const isEven = function (num) { //regular function expression
//     return num % 2 === 0;
// }

// const isEven = (num) => { //arrow function with parens around param
//     return num % 2 === 0;
// }

// const isEven = num => { //no parens around param
//     return num % 2 === 0;
// }

// const isEven = num => ( // implicit return
//     num % 2 === 0
// );

const isEven = num => num % 2 === 0; // one liner implicit return

console.log(isEven(3));




