
const express = require("express");

// Executes express
const app = express();
// console.dir(app); // returns an object with different key values

// app.use(), anytime we have an incoming request, this callback will run
// It doesn't matter to which point goes the request or teh type
/* app.use(() =>{
    console.log("Got new request!");
}) */

// Same method but with parameters
// First param : request --> Object made by express, parse text into a JS Object
// Second param : response --> Object made by express, parse text into a JS Object
/* app.use((req, res) =>{
    console.log("Got new request!");
    //console.dir(req); It shows the request parsed into JS object
    //res.send("We got your request"); // Generate a http response
    res.send({color:'red'}); // Responding with a JSON. Because it parses the Objects to JSON
})  */

app.listen(8080, () =>
{
    console.log("listening!");
})

// ROUTES

// / => 'Welcome'
app.get('/', (req, res) => {
    console.log("Welcome to the Home Page!!!");
    res.send('Welcome to the  Home Page!!');
})

// Defining paterns for your routes — Generic Patterns

app.get('/r/:subreddit', (req, res) => {
    //console.log(req.params); --> req.params return a JS object with the variable :subreddit
    const {subreddit} = req.params; // Destructuring the object
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    //console.log(req.params); --> req.params return a JS object with the variable :subreddit
    const {subreddit, postId} = req.params; // Destructuring the object, to extract the values
    res.send(`<h1>Viewing post id: ${postId} on the ${subreddit} subreddit </h1>`);
})

// /cats => 'meow'
app.get('/cats', (req, res) => {
    console.log("CAT REQUEST!!!");
    res.send('MEOW!!');
})

// POST REQUEST
app.post('/cats', (req, res) => {
    console.log("POST REQUEST CATS!!!");
    res.send('POST CATS!!');
})

// /dogs => 'woof'
app.get('/dogs', (req, res) => {
    console.log("DOG REQUEST!!!");
    res.send('WOOF!!');
})


// Query strings, filtering with ?
// Ex : http://localhost:8080/search?q=cat&color=green
// Ex : http://localhost:8080/search?q --> Nothing ...
// Ex : http://localhost:8080/search --> Nothing ...
app.get('/search', (req, res) => {
    //console.log(req.query);
    const {q} = req.query;
    if(!q){
        res.send("Nothing found if nothing searched!");
    }
    res.send(`<h1>Search results for : ${q} </h1>`);
})

// It reviews sequentally, so if none of the previous requests matches, that means that 
// the endpoint does not exits, the * means everything
// SO it has to be AT THE END
app.get('*', (req, res) => {
    res.send(`I don't know the route to that path`);
})

