const mongoose = require('mongoose');

// Conect to a MongoDB server
// If the database /movieApp doesn't exists, it will create it
// getting-started.js

//main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect('mongodb://localhost:27017/movieApp');
        console.log("CONNECTION OPEN!");  
    }
    catch(err){
        console.log("ERROR TRYING TO CONNECT :(");
        console.log(err);
    }
}

main();

// Defining Schemas

/*
{
    title : 'Amadeus',
    year: 1986,
    score: 9.2,
    rating: 'R'

}
*/

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score : Number,
    reating : String
});

// Tell Mongo that I want to make a model
// (name, model)
// Mongo will create a collection for us called movies 
// And now we have a model class named Movie
const Movie = mongoose.model('Movie', movieSchema);

// New instances of moving class and saving them into the db

const amadeus = new Movie({title : 'Amadeus', year: 1986, score: 9.2,rating: 'R'});

// Load and save it to the db using the node terminal
// .load index.js
// amadeus.save(); in the node console

// INSERT MANY - Returns a promise, just executed twice

/* Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
])
    .then(data => {
        console.log("IT WORKED!")
        console.log(data);
    }) */