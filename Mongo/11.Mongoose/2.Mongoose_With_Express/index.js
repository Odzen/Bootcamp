// var ObjectID = require('mongoose').ObjectID;


const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override'); // TO UPDATE USING A FORM


// Import the model
const Product = require('./models/product');
const { privateDecrypt } = require('crypto');

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

// Midleware for posting with the form to get info from the body
app.use(express.urlencoded({ extended: true }));
// Midleware to parse json info from the request body -- midleware function
app.use(express.json());

// IN ORDER TO UPDATE, before using it, install the package npm i method-override
app.use(methodOverride('_method'));



/* For returning a JSON in the browser
app.get('/products', async (req , res) => {
    // find({}) --> Finds Everything and returns a promise
    const products = await Product.find({});
    console.log(products);
    res.send(products);
});
*/
const categories = ['fruit', 'vegetable', 'dairy'];


// To CREATE
app.get('/products', async (req , res) => {
    // find({}) --> Finds Everything and returns a promise
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
});

// TO POST USING FORM and EJS
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    // To redirect that to the template where we show the products
    res.redirect(`/products/${newProduct._id}`)
})

/* 
//My shot to save comming as JSON
app.post('/products', async (req, res) => {
    //const newProduct = new Product(req.body);
    const {name, price, category} = req.body;
    console.log(name);

    //Trying to save comming as a JSON
    /*
    const newProduct = new Product(
        {
            name,
            price,
            category
        }
    );
    
    res.locals.person = newProduct;
    await newProduct.save();
    console.log(JSON.stringify(req.body)); // Prints the JSON
    //res.redirect(`/products/${newProduct._id}`)
})
*/
// TO Querying by id
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    // res.send(JSON.stringify(product)); --> JSON API
    res.render('products/show', { product }); //--> HTML response
});

// TO UPDATE WITH FORM
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

// TO DELETE
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000");
});