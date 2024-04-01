import React from 'react'

function AboutUs() {
  return (
    <div className='flex flex-col justify-center h-screen p-6 mt-10 mb-5 mainContainer '>
        <div className="flex h-full p-6 mt-20 upperSideContent">
        <div className="content">
      <h1 className='mt-3 font-bold text-7xl'>Our Vision</h1>
      <p className='mt-5 text-xl -10'>Envision a React-based web application that serves as a visually stunning gateway to the world of books. It features interactive book cards, advanced search and filtering, and a responsive design that ensures a seamless experience on any device. This platform is designed to captivate, educate, and inspire readers by making literary discovery engaging and accessible to everyone, everywhere.</p>
      </div>
      <div className=" imageContainer">
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*DI4ointlcukqBf0s" alt="" />
        </div> 
        </div>
        
        <div className="flex h-[500px] p-6 lowerSideContent mt-30">
            <div className="creatorImage">
                <img className='p-5 border-2 rounded-full' src="https://avatars.githubusercontent.com/u/116885079?s=400&u=f6264f135e0055be074502e49386d6feda101615&v=4" alt="" />
            </div>

            <div className="aboutCreator">
                <h1 className='p-3 mt-3 ml-1 text-3xl font-bold'>Creator: Sahil Sharma</h1>
                <p className='mt-2 ml-10 text-xl'>Sahil Sharma is a creative UI/UX and Frontend Developer whose passion for coding transcends the ordinary, turning complex challenges into captivating digital experiences. Fueled by a love for innovation and a knack for elegant solutions, Sahil approaches each project with a unique blend of creativity and technical prowess, crafting interfaces that not only function flawlessly but also tell a story. His dedication to coding is not just a profession; it's a canvas for his imagination.</p>
                <button
      type="button"
      className="px-3 py-2 mt-5 ml-4 text-sm font-semibold text-white bg-black rounded-full shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Github 
    </button>
            </div>
        </div>
          
    </div>
  )
}

export default AboutUs
