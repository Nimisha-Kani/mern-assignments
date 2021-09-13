import { contains, copyObject, delay } from '../utils/core';



const url = 'http://localhost:5000/api/books/';


export class BookService {

    static instance = new BookService();

    constructor() {

    }

    getAll = async () => {
        try {
            let response = await fetch(url);
            // console.log('response', response);
            if (response.status !== 200) {
                console.error('http error', response.status);
                return [];
            }
            let books = await response.json();
            return books;
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }


    addBook = (book) => {
        this.books.push(book);
        this.save();
    }

    removeBook = async (isbn) => {
        await delay(100);
        try{
            const url1 = `http://localhost:5000/api/books/${isbn}`;
            let response = await fetch(url1,{method:'delete'});
            // let book = await response.json();
            // console.log("inside client book by id",book);
            this.save();
            window.location = "http://localhost:5000/books/";
            // return book;

            // return this.books.find(book => book.isbn === isbn);
        }catch(error){
            console.log('error', error);
            return null;
        }
        // this.books = this.books.filter(b => b.isbn !== isbn);
        
    }


    
    getBookByIsbn = async (isbn) => {
        
        await delay(2000);
        const url1 = `http://localhost:5000/api/books/${isbn}`;
        try{
            
            let response = await fetch(url1);
            let book = await response.json();
            // console.log("inside client book by id",book);
            return book;

            // return this.books.find(book => book.isbn === isbn);
        }catch(error){
            console.log('error', error);
            return null;
        }
    }

    // getBooksByAuthor = (author) => {
    //     return this.books.filter(book => contains(book.author, author));
    // }

    getBooksByTitle = (title) => {
        return this.books.filter(book => contains(book.title, title));
    }

    async update(isbn, book) {
        const url1 = `http://localhost:5000/api/books/${isbn}`;
        try{
            let existing = await this.getBookByIsbn(isbn);
            let response = await fetch(url1,
                        {method:'put',
                        headers: {'Content-Type': 'application/json'},
                        body: book});
            let newbook = await response.json();
            console.log(newbook);
            copyObject(existing, newbook);
            console.log('existing', newbook);

            this.save();
        }catch(error){
            console.log('error', error);
            return null;
        }
        
        
    }

}