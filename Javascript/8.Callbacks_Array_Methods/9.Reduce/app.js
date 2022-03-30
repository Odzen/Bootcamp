//REDUCE

/*
Executes a reducer function on each element of the array,
resulting in a single value
*/

//Array of prices
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// Calculating the total of the prices with loop
// let total = 0
// for (let price of prices) {
//     total += price
// }

// Calculating the total of the prices with reduce

const total = prices.reduce((total, price) => {
    return total + price;
});

console.log(total);

//Minimum price with reduce

const minimumValue = prices.reduce((min, price) => {
    if (min < price) {
        return min;
    }
    return price;
});

console.log(minimumValue);

//Movies Example

//Movies

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2013
    },
    {
        title: 'Parasite',
        score: 70,
        year: 2004
    },
    {
        title: 'Alien',
        score: 100,
        year: 1986
    }
]

//Highest rated movie

const bestMovie = movies.reduce((bestMovie, currentMovie) => {
    if (bestMovie.score < currentMovie.score)
        return currentMovie;
    return bestMovie;
})

console.log(bestMovie); //Alien

//Setting an initial value
let evens = [2, 4, 6, 8];
const exampleInitialValue = evens.reduce((sum, actual) => sum + actual, 100);

console.log(exampleInitialValue); //120