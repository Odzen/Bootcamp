var ObjectID = require('mongoose').ObjectID;


const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Import the model
const Product = require('./models/product');

async function main() {
    try{
        await mongoose.connect('mongodb://localhost:27017/farmStand');
        console.log("MONGO CONNECTION OPEN!");  
    }
    catch(err){
        console.log("ERROR TRYING TO CONNECT to MONGO :(");
        console.log(err);
    }
}

main();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* For returning a JSON in the browser
app.get('/products', async (req , res) => {
    // find({}) --> Finds Everything and returns a promise
    const products = await Product.find({});
    console.log(products);
    res.send(products);
});
*/

app.get('/products', async (req , res) => {
    // find({}) --> Finds Everything and returns a promise
    const products = await Product.find({});
    console.log(products);
    res.render('products/index', {products});
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.send(product);
});

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000");
});