
const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');

async function main() {
    try{
        await mongoose.connect('mongodb://localhost:27017/movieApp');
        console.log("MONGO CONNECTION OPEN!");  
    }
    catch(err){
        console.log("ERROR TRYING TO CONNECT to MONGO :(");
        console.log(err);
    }
}

main();

app.set('views', path.join(__dirname), 'views');
app.set('view engine', 'ejs');

app.get('/dog', (req , res) => {
    res.send("DOG");
});

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000");
});