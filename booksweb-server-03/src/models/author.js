const mongoose = require('mongoose');

const authors = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    birth:{
        type:Date,
        required:true
    },
    death:{
        type:Date,
        required:false
    }
});

const AuthorModel= mongoose.model('authors', authors);

module.exports={
    AuthorModel
}