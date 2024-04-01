import React from 'react'
import bookshelf from '../assets/Bookshelf.jpg'

function HeroSection() {
  return (
    <div className='flex h-screen p-6 mt-20 heroSection '>
      <div className="w-10/12 p-10 mainHeading">
        <h1 className='mt-3 font-bold text-7xl '>Explore More and More Books Here...</h1>
        <p className='mt-5 text-xl -10 '>Welcome to BookShelf, your personal digital book sanctuary. Dive into a vast sea of literature, from timeless classics to modern masterpieces. Organize your reads, discover new favorites, and track your reading journey with ease. BookShelf is more than just a bookshelf—it's a gateway to worlds waiting to be explored.</p>
        <button
      type="button"
      className="px-3 py-2 mt-5 text-sm font-semibold text-white bg-black rounded-full shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Explore More
    </button>
      </div>
      <div className="imageSection">
        <img src={bookshelf} alt="" className='h-100 w-[900px] object-cover opacity-90	'/>
      </div>
    </div>
  )
}

export default HeroSection
