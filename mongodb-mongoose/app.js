require('dotenv').config();
const {DB_USER,DB_PASSWORD,DB_URL}=process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}?retryWrites=true&w=majority`;
const mongoose = require('mongoose');
const {BookModel} = require( './book');

async function test(){

    try{
        console.log('connecting...');
        
        await mongoose.connect(uri);

        console.log('connected');

        let books= await BookModel.find({author:/rowling/i},{title:true,_id:false,author:true});

        console.log(books);

        mongoose.connection.close();

    }catch(err){
        console.log('error',err.message);
    }

}

test();