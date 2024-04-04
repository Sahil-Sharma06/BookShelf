import React from 'react'
function Navigation() {
  return (
    <div className='flex items-center justify-between text-lg p-7 h-14 border-y-4'>
      <div className="logo"><h1 className='px-3 text-xl'>BookShelf</h1></div>
      <div className="flex gap-12 px-5 navLinks">
        <li className="list-none navItems"><a href="">Home</a></li>
        <li className="list-none navItems"><a href="">About Us</a></li>
        <li className="list-none navItems"><a href="">Books</a></li>
        {/* <li className="list-none navItems"><input className='p-0.5 text-black rounded-lg' type="text" placeholder='Search'/></li> */}
      </div>
    </div>
  )
}

export default Navigation
