import React from 'react';

const BookDetail = ({ book }) => {
    if (!book) return <p>Loading...</p>;

    return (
        <div className="book-detail p-4 flex justify-around">
            <img src={book.image} alt="book-image" style={{ width: "400px", height: "400px" }} />
            <div>
                <h2 className="text-2xl font-bold">{book.title}</h2>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                <p><strong>Publication Date:</strong> {book.publicationDate}</p>
            </div>
        </div>
    );
};

export default BookDetail;
