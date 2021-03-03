const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
});

module.exports = Product = mongoose.model('product', ProductSchema);
