//DESTRUCTURING

/*
Short and clean syntax to unpack
    - Values from arrays
    - Propierties from objects
Into distinct variables
*/

// DESTRUCTURING ARRAYS
const scores = [5, 4, 3, 2, 1, 0];

// const highestScore = scores[0];
// const secondHighestScore = scores[1];

//With destructuring, it will assign in order
const [highestScore, secondHighestScore, ...restOfTheScores] = scores;

console.log(highestScore);//5
console.log(secondHighestScore);//4
console.log(restOfTheScores);// [3,2,1,0]


// DESTRUCTURING OBJECTS

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart"
}

//Destructiring, the order does not matter, matters only the name of the key
const { first, last, country } = runner;

console.log(first); // "Eliud"
console.log(last); // "Kipchoge"
console.log(country); // "Kenya"


// DESTRUCTURING PARAMS IN FUNCTIONS

const fullName = (({ first, last }) => {
    return `${first} ${last}`;
});

console.log(fullName(runner)); // "Eliud Kipchog"
