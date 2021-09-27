const {connect}= require('./src/models/connection');
const mongoose = require('mongoose');
const {Author} = require('./src/models/author');
const {Book}=require('./src/models/book');

const makeId= name=> name.toLowerCase().replace(' ','-');

async function addAuthors(){

    const names=["Vivek Dutta Mishra","Jeffrey Archer","Ramdhari Singh Dinkar","John Grisham","JK Rowling"];

    for await (const name of names){
        let author=new Author({
            name,    
            id: makeId(name),
            photo: `/images/authors/${makeId(name)}.jpg`,
            biography:`Author ${name}`
        });

        await author.save();
        console.log(`author ${author.name} added`);

    }


    

    console.log('All Authors Added');

}

async function addBooks(){

    let books=[
        { title:'The Accursed God', author:'vivek-dutta-mishra'},
        { title:'The Mahabharata Project', author:'vivek-dutta-mishra'}
    //  { title:'Kane And Abel', author:'jeffrey-archer'},
    // { title:'Brethren', author:'john-grisham'},
    // { title:'Harry Potter and the Half Blood Prince', author:'jk-rowling'},
    //{ title:'Sons of Fortune', author:'jeffrey-archer'}
    ];
    let count=0;
    for await(let book of books){
        count++;
        const author=await Author.findOne({id: book.author});
        if(!author){
            console.log('No such author as ', book.author);
        } else {
            const newBook=new Book({
                title:book.title,
                author: author._id,
                price:100,
                isbn:`100000${count}`,
                cover:`/images/books/${makeId(book.title)}.jpg`

            });
            await newBook.save();
            console.log(`book ${newBook.title} saved with id: ${newBook._id}`);
        }
    }

}


async function addReviews(){
    const reviews=[
        {title:'The Accursed God',name:'Shivanshi',comment:'Great Book',rating:5},
        {title:'Kane and Abel',name:'Shivanshi',comment:'Nice Book',rating:3},
        {title:'Sons of Fortune',name:'Shweta',comment:'Great Book',rating:4},
        {title:'The Accursed God',name:'Sanjay',comment:'Good Book',rating:4},
        {title:'The Accursed God',name:'Shweta',comment:'Good Book',rating:4}
    ];

    for await (const review of reviews){
        let book= await Book.findOne({title:review.title});
        if(!book){
            console.log(`couldn't find the book : ${review.title}`);
        } else {
            book.reviews.push({cooment:review.comment, name:review.name,rating:review.rating});
            await book.save();
            console.log(`Review of ${review.title} by ${review.name} saved`);
        }
    }
}


async function runDb(){

    try{
       
        await connect();
        console.log('database connected');
        //await addAuthors();
        //await addBooks();
        await addReviews();
        //let books= await Book.find().populate("author");

        books.forEach(book=>{
            console.log(`${book.title}\n\t ${book.author.name}`);
        });

        mongoose.connection.close();
        console.log('database closed');

    }catch(e){
        console.log('error',e.message)
    }
}


runDb();