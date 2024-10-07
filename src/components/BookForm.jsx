import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bookService from '../services/bookService';
import './BookForm.css';

const BookForm = ({ bookId }) => {
    const [book, setBook] = useState({ title: '', author: '', genre: '', publicationDate: '', image: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (bookId) {
            const fetchBook = async () => {
                const fetchedBook = await bookService.getBookById(bookId);
                setBook(fetchedBook);
            };
            fetchBook();
        }
    }, [bookId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (bookId) {
            await bookService.updateBook(bookId, book);
        } else {
            await bookService.addBook(book);
        }
        navigate('/');
    };

    return (
        <div className="form-container">
            <h2>{bookId ? 'Edit Book' : 'Add Book'}</h2>
            <form className="book-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={book.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input type="text" name="author" value={book.author} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input type="text" name="genre" value={book.genre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Publication Date</label>
                    <input type="date" name="publicationDate" value={book.publicationDate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Book Image</label>
                    <input type="text" name="image" value={book.image} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn-submit">{bookId ? 'Update Book' : 'Add Book'}</button>
            </form>
        </div>
    );
};

export default BookForm;
