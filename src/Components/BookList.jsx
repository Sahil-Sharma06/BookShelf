import React from 'react';
import BooksCard from './BooksCard'; // Adjust the import path as needed
import booksData from '../Data.jsx'; // Adjust the import path as needed

function BooksList() {
  return (
    <div className="flex flex-wrap w-screen mb-10 books-list">
      {booksData.map((book) => (
        <BooksCard
          key={book.id}
          imageUrl={book.imageUrl}
          title={book.title}
          description={book.description}
          id={book.id} // Pass the id prop
        />
      ))}
    </div>
  );
}

export default BooksList;

