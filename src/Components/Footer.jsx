import React from 'react'

function Footer() {
  return (
    <section className="w-screen overflow-hidden bg-white">
      <div className="container relative z-10 flex justify-center h-20 px-4 mx-auto text-white bg-black">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <ul className="flex flex-wrap items-center -m-5 ">
              <li className="p-5">
                <a className="font-medium hover:text-gray-400" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium hover:text-gray-400" href="#">
                  Terms of Service
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium hover:text-gray-400" href="#">
                  Return Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium hover:text-gray-400" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
         
          </div>
        </div>
    </section>
  )
}

export default Footer
