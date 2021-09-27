
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://training:training%23123@training.wbunv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err,connection) => {

    if(err){
        console.log('error connecting to db', err.message);
        
        
    } else{

        console.log('connected successfully');
        const booksDb=client.db('mfinebooksdb');

        const booksCollection=booksDb.collection('books');
        
        console.log('booksCollection',booksCollection);
        

        
        
        client.close();
    }
}); 

console.log('connecting to mongdodb...');