const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    costPrice:{
        type: Number,
        default: 0
    },
    sellingPrice:{
        type: Number,
        required: true,
    },
    company:{
        type: String,
    },   
    date:{
        type: Date,
        default: Date.now 
    }
});

module.exports = mongoose.model('Product',ProductSchema)