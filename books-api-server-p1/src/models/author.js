let mongoose = require('mongoose');

const Author = mongoose.model('Author', new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        unique:true, 
        required:true
    },
    photo:{
        type:String,       
        
    }, 
    biography:{
        type:String
    }

}));

module.exports={ Author};