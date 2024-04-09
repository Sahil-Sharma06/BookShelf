import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation.jsx';
import HeroSection from './Components/HeroSection.jsx';
import BooksList from './Components/BookList.jsx';
import BookPage from './Components/BookPage.jsx';
import AboutUs from './Components/AboutUs.jsx'; 
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/books" element={<BooksList searchQuery="programming" />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
