import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';
import NotFound from './not-found';
import ConfirmPopup from './confirm-popup';
import BookThumbnail from './book-thumbnail';
import { BookService } from '../services/book-service';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Component = () => {

    const [books, setBooks] = useState([]);

    const [book, setBook] = useState(null);
    useEffect(() => {
        BookService.instance
            .getAll()
            .then(setBooks);     //.then(books=>setBooks(books))
    }, []);

    const handleDelete = async (book) => {
        setBook(book);
    }

    const handleCancel = () => {
        setBook(null);
    }

    const handleConfirm = async () => {
        
        console.log('trying to delete ',book.isbn);
        let result = await BookService.instance.removeBook(book.isbn);
        if (result.success) {
            let newBooks = books.filter(b => b.isbn !== book.isbn);
            setBooks(newBooks);
        } else{
            alert("Failed to delete book"+ result.error.message);
        }
        setBook(null);
    }


    if (books === null) {
        return <NotFound title="Error Connecting to Server" message="Ple try a little Later" />
    }

    if (books.length === 0) {
        return <Loading text="building our recommendation" />
    }

    return (
        <div >
            <h2>Our Recommendations</h2>
            
            <ConfirmPopup title="Confirm Delete"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                show={book}
            >
                <div className="row">
                    <img src={book?.cover} alt={book?.title} style={{ width: 80 }} className="col col-4"></img>
                    <div className="col col-8">{book?.title}</div>
                </div>
            </ConfirmPopup>
       
       <div class='grid-view-container'>
           {books.map(book=><BookThumbnail book={book}/>)}
       </div>

    </div>);
}

export default Component