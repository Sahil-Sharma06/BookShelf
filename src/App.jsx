import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation.jsx';
import HeroSection from './Components/HeroSection.jsx';
import BooksList from './Components/BookList.jsx';
import BookPage from './Components/BookPage.jsx';
import AboutUs from './Components/AboutUs.jsx'; 
import Footer from './Components/Footer.jsx';
import booksData from './Data.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/books" element={<BooksList />} />
          {booksData.map((book) => (
            <Route key={book.id} path={`/books/${book.id}`} element={<BookPage {...book} />} />
          ))}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
