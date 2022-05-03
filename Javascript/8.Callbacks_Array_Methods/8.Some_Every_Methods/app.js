//SOME

/* 
Similar to every but returns true if ANY of the array elements pass
the test function
*/

const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];
//Are they any words longer than 4 characters?
const fourChar = words.some(word => {
    return word.length > 4;
});

console.log(fourChar) //true

//Do any words start with 'Z'?
const startZ = words.some(word => word[0] === 'Z');

console.log(startZ) //false

//Do any words contain 'cake'?
const containsCake = words.some(word => word.includes('cake'));

console.log(containsCake) //true

//EVERY

/* 
Tests whether all elements in the array pass the provided function. If that's so, returns true
*/


const words2 = ['dog', 'dig', 'log', 'bag', 'wag'];

const lengthOfThree = words2.every(word => {
    return word.length === 3;
});

console.log(lengthOfThree); // true

const startsWithd = words2.every(word => word[0] === 'd');

console.log(startsWithd); // false

const lastG = words2.every(word => {
    let last_letter = word[word.length - 1];
    return last_letter === 'g';
});

console.log(lastG); // true

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
        score: 60,
        year: 1986
    }
]

// Any movie created after 2015??
const after2015 = movies.some(movie => movie.year > 2015);

console.log(after2015); // false


//EXERCISE

const allEvens = (numbers => {
    const areAllEven = numbers.every(number => number % 2 === 0);
    return areAllEven;
});

console.log(allEvens([2, 4, 6, 8])); //true
console.log(allEvens([1, 4, 6, 8])); //false