const mongoose = require('mongoose');

// Conect to a MongoDB server
// If the database /movieApp doesn't exists, it will create it
// getting-started.js

//main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect('mongodb://localhost:27017/shopApp');
        console.log("CONNECTION OPEN!");  
    }
    catch(err){
        console.log("ERROR TRYING TO CONNECT :(");
        console.log(err);
    }
}

main();

// Schema with validations, the dafault of require is false
const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        maxlength: 20,
        lowercase: true
        
    }, 
    price: {
        type: Number
    },
    onSale : {
        type : Boolean,
        default : false
    },
    categories : [String],
    qty : {
        online:{
            type: Number,
            default :0
        },
        inStore : {
            type : Number,
            default : 0
        }
    }
});

const Product = mongoose.model('Product', productSchema);

// The name is required, so it will be an error
// The type of the price has to be any type that can be cast into a number
// or a number iself, so for example '599' also works
const bike = new Product({ name: 'Mountain Bike ', price : '599', categories : ['First Cate','Second Cate' ]});

bike.save()
    .then(data => {
    console.log("IT WORKED!");
    console.log(data);
    })
    .catch (err => {
    console.log("OH NO ERROR!");
    console.log(err.errors.name.properties.message);
    });

const find = async function findProducts() {const result = await Product.find({}); console.log(result);}
find();

// To runValidators when I Update, following th schema
// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })