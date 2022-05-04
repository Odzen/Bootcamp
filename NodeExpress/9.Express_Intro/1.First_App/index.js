
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
app.use((req, res) =>{
    console.log("Got new request!");
    //console.dir(req); It shows the request parsed into JS object
    //res.send("We got your request"); // Generate a http response
    res.send({color:'red'}); // Responding with a JSON. Because it parses the Objects to JSON
}) 

app.listen(8080, () =>
{
    console.log("listening!");
})