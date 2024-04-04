import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation.jsx'
import HeroSection from './Components/HeroSection.jsx'
import BooksCard from './Components/BooksCard.jsx'
import Footer from './Components/Footer.jsx'
import CardParent from './Components/CardParent.jsx'
import AboutUs from './Components/AboutUs.jsx'
import BookList from './Components/BookList.jsx'
import BookPage from './Components/BookPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className=''>
    <Navigation/>
    {/* <HeroSection/>
    <CardParent/>
    <Footer/> */}
    {/* <AboutUs/> */}
    <BookPage/>
    <Footer/>
  </div>
  )
}

export default App
