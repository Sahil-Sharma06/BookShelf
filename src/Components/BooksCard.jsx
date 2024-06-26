import React from 'react';
import { Link } from 'react-router-dom';

function BooksCard({ title, description, imageUrl, id }) {
  return (
    <div className="p-10 mainContainer">
      <div className="w-[300px] rounded-lg shadow-xl border h-[400px]">
        <img src={imageUrl} alt={title} className="h-[200px] w-full rounded-t-md object-cover" />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{title}</h1>
          {/* <p className="mt-3 text-sm text-gray-600">{description}</p> */}
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
