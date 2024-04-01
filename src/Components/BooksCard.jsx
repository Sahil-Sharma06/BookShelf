import React from 'react';

function BooksCard({ title, description, imageUrl, tags }) {
  return (
    <div className="p-10 mainContainer">
      <div className="w-[300px] rounded-lg shadow-xl	 border h-[400px]">
        <img src={imageUrl} alt={title} className="h-[200px] w-full rounded-t-md object-cover" />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="mt-3 text-sm text-gray-600">{description}</p>
          <button className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80">
            Read
          </button>
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
