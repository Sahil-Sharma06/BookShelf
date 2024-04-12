import React, { useState, useEffect } from 'react';
import BooksCard from './BooksCard';

function BooksList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!searchQuery) return;

      setLoading(true);

      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyB2bHLOe6YuDhTUlZiBej5QKMK_pcGWoqQ`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }

        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="mainContainer" >
      <div className="w-full h-full books-list">
      <h1 className='p-5 m-6 text-3xl font-bold'>Search for Books You want to read</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for books..."
        className='p-5 mx-10 mt-3 mb-5'
      />
      <div className="flex flex-wrap cardContainer ">
        
      {loading ? (
        <div>Loading...</div>
      ) : (
        books.map((book, index) => (
          <BooksCard
            key={index}
            imageUrl={book.volumeInfo.imageLinks?.thumbnail} // Add conditional access here
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
          />
        ))
      )}
      </div>
    </div>
    </div>
    
  );
}

export default BooksList;
