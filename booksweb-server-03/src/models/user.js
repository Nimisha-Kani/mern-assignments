const mongoose = require('mongoose');

const users = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    phone: Number,
    password:{
        type:String,
        required:true
    }
});

const UserModel = mongoose.model('users',users);

module.exports={
    UserModel
}