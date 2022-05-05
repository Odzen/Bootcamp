// FILE TO RUN ANYTIME THAT I WANT TO GET
// SOME NEW DATA IN MY DATABASE

// TO SEED YOUR DATABASE SEPARATELY FROM THE WEB APP
// FOR DEVELOPMENT PURPOSES

// Import the model and connect
const Product = require('./models/product');
const mongoose = require('mongoose');


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

// Creating an instance of the class, a new object with data

/* const p = new Product({
    name : 'Ruby Grapefruit',
    price: 1.99,
    category : 'fruit'
});
// Save the product

p.save().then(p => {
    console.log(p);
})
.catch (e => {
    console.log(e);
}); */

// node seeds.js to check if it's saving
/* CHECK INTO THE DATABASE
show collections
use farmStand
switched to db farmStand
farmStand> db.products.find();
[
  {
    _id: ObjectId("627407b7758b182b23492e6c"),
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit',
    __v: 0
  }
]

*/

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]


// Mongo validates everything before insert anything
// If some object doesn't pass the validation, that means that
// Nothing will be inserted
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })