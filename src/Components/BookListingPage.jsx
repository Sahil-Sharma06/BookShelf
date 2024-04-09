import React, { useState } from 'react';
import BooksList from './BooksList';

function BookListingPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Enter search query" />
        <button onClick={() => setSearchQuery(searchQuery)}>Search</button>
      </div>
      <BooksList searchQuery={searchQuery} />
    </div>
  );
}

export default BookListingPage;
