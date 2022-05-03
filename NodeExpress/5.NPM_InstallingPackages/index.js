
const jokes = require("give-me-a-joke");
const colors = require("colors");
//console.dir(jokes);

jokes.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
});

/*
Result

{
  getRandomCNJoke: [Function (anonymous)],
  getCustomJoke: [Function (anonymous)],
  getRandomDadJoke: [Function (anonymous)],
  getRandomJokeOfTheDay: [Function (anonymous)]
}

*/