
const { MongoClient } = require('mongodb');
require('dotenv').config();

const {DB_USER,DB_PASSWORD,DB_URL}=process.env;

//const uri = "mongodb+srv://training:training%23123@training.wbunv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}/myFirstDatabase?retryWrites=true&w=majority`;
//console.log('uri',uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



async function getAllBooks(){

        try{
            console.log('connecting to database')
            await client.connect();
            console.log('connected...');

            const db= client.db('bookmanagement');

            const booksCollection=db.collection('books');

            let books= await booksCollection.find({author:/vivek/i}).toArray();

            console.log('total books', books.length);

            //console.log('books',books);

            const titles=books.map( book=>book.title);

            console.log('titles',titles);

            client.close();
        }catch(error){
            console.log('error',error.message);
        }
        

}

async function addDummyBook(){
    await client.connect();
    
    const booksCollection= await client.db('bookmanagement').collection('books');

    booksCollection.insertOne({
        title:"Rashmirathi",
        author:"Ramdhari Singh Dinkar"
    });
}


async function test(){
   // await addDummyBook();
    await getAllBooks();
    console.log('done');
}

test();