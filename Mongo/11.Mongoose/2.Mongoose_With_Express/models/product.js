

const mongoose = require('mongoose');


// Schema
const productSchema = new mongoose.Schema({
    //_id: { type: String },

    name: {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required: true,
        min : 0
    },
    category : {
        type : String,
        lowercase : true,
        enum : ['fruit', 'vegetable', 'dairy']
    }
});

// Compile the mdoel
const Product = mongoose.model('Product', productSchema);

// Export the model from the file, to import the Module Product and use it somewhere else
module.exports = Product;
