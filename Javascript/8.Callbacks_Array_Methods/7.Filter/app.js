// FILTER
/*
Creates a new array with all elements that pass the test implemented by
the provided function. Callback returns true or false if is true
*/

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
    return n % 2 === 1; //Callback returns true or false if is true , n is added to the filtered array
})

console.log(odds)

const smallNums = nums.filter(n => n < 5);
console.log(smallNums)

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

// Return movies with the score greater than 80

const goodMovies = movies.filter(movie => {
    return movie.score > 80;
})
console.log(goodMovies);


//Return the titles for the movies with the score greater than 80
const goodMoviesTitles = movies.filter(movie => movie.score > 80).map(movie => movie.title);

console.log(goodMoviesTitles);


// Return movies with releasing year greater than 2000

const recentMovies = movies.filter(movie => movie.year > 2000);

console.log(recentMovies);


//EXERCISE
function validUserNames(usernames) {
    const validUserNames = usernames.filter(user => {
        return user.length < 10;
    });
    return validUserNames
}

console.log(validUserNames(['mark', 'staceysmom1978', 'sdahvweuy3782r8webf', 'carrie98', 'MoanaFan']));

