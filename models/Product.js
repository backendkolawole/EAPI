const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name']
    },
    price: {
        type: Number,
        required: [true, 'must provide a price']
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            mesage: '{VALUE} is not supported'
        }
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    featured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}) 




const Product = new mongoose.model('Product', ProductSchema)
module.exports = Product