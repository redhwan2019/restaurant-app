const mongoose = require('mongoose')


const RestaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true  
    },
    coordinate:{
        type: Array,
        required: true  
    },
    type:{
        type: String,
        required: true  
    },
    image:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("restaurant",RestaurantSchema)