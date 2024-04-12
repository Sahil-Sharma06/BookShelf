import React, { useState, useEffect } from 'react';

function BookPage({ match }) {
  const { id } = match.params;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { id } = match.params;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyB2bHLOe6YuDhTUlZiBej5QKMK_pcGWoqQ`
        );
        const data = await response.json();
        setBook(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Error: Book not found</div>;
  }

  const { title, authors, categories, publishedDate, imageLinks, description } = book.volumeInfo;

  return (
    <div className='mainContainer'>
      <div className="flex items-center justify-start UpperContainer h-[370px] w-screen p-10">
        <div className="bookImage">
            <img src={imageLinks?.thumbnail} alt={title} className='h-[300px] w-[450px] object-cover rounded-md'/>
        </div>
        <div className="p-5 bookDetails">
          <h1 className='p-2 text-2xl border-stone-950'>Title : {title}</h1>
          <h1 className='p-2 text-2xl border-y-2 border-stone-950'>Authors : {authors?.join(', ')}</h1>
          <h1 className='p-2 text-2xl border-y-2 border-stone-950'>Categories : {categories?.join(', ')}</h1>
          <h1 className='p-2 text-2xl border-y-2 border-stone-950'>Published Date : {publishedDate}</h1>
        </div>
      </div>
      <div className="p-5 mb-5 lowerContainer bookContent">
        <p className='p-5 text-lg'>{description}</p>
      </div>
    </div>
  );
}

export default BookPage;
BookPage.jsx

