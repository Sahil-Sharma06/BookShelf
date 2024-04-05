import React from 'react'

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='flex items-center justify-between text-lg p-7 h-14 border-y-4'>
      <div className="logo"><h1 className='px-3 text-xl'>BookShelf</h1></div>
      <div className="flex gap-12 px-5 navLinks">
        <li className="list-none navItems"><Link to="/">Home</Link></li>
        <li className="list-none navItems"><Link to="/about">About Us</Link></li>
        <li className="list-none navItems"><Link to="/books">Books</Link></li>
      </div>
    </div>
  )
}

export default Navigation;

