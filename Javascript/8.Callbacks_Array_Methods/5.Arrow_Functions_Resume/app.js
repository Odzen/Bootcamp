const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

//Conventional
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10} `;
});

console.log(newMovies);

//Arrow Function
const newMovies2 = movies.map((movie) => (
    `${movie.title} - ${movie.score / 10} `
));

console.log(newMovies2);

//Arrow Function One line

const newMovies3 = movies.map((movie) => `${movie.title} - ${movie.score / 10} `);

console.log(newMovies3);
