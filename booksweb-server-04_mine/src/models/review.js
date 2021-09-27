const mongoose = require('mongoose');

const reviewSchema= mongoose.Schema({
    isbn:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    comment:String,
    rating:{
        type:Number,
        required:true
    }
});

module.exports.Review= mongoose.model('Review',reviewSchema);