import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import DetailedAbout from './components/DetailedAbout';
import News from './components/News';
import NewsPost from './components/NewsPost';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/about" element={<DetailedAbout />} />
          <Route path="/news/:id" element={<NewsPost />} />
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Services />
              <News />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;