import React from 'react'
import BooksCard from './BooksCard'; 
import booksData from '../Data.jsx'; 

function BookList() {
  return (
    <div className='mainContainer'>
        <div className="heading">
            <h1 className='p-8 mt-2 ml-3 text-3xl font-semibold '>New Releases</h1>
        </div>
        <div className="flex flex-wrap w-screen mb-10 books-list">
      {booksData.map((book) => (
        <BooksCard
          key={book.id}
          imageUrl={book.imageUrl}
          title={book.title}
          description={book.description}
        />
        ))}
        </div>
      
    </div>
  )
}

export default BookList
