import React from 'react';

function BookPage({ title, author, genre, datePublished, imageUrl, description }) {
  return (
    <div className='mainContainer'>
      <div className="flex items-center justify-start UpperContainer h-[370px] w-screen p-10">
        <div className="bookImage">
            <img src={imageUrl} alt={title} className='h-[300px] w-[450px] object-cover rounded-md'/>
        </div>
        <div className="p-5 bookDetails">
          <h1 className='p-2 text-2xl border-stone-950'>Title : {title}</h1>
          <h1 className='p-2 text-2xl border-y-2 border-stone-950'>Author : {author}</h1>
          <h1 className='p-2 text-2xl border-y-2 border-stone-950'>Genre : {genre}</h1>
          <h1 className='p-2 text-2xl border-y-2 border-stone-950'>Date Published : {datePublished}</h1>
        </div>
      </div>
      <div className="p-5 mb-5 lowerContainer bookContent">
        <p className='p-5 text-lg'>{description}</p>
      </div>
    </div>
  );
}

export default BookPage;
