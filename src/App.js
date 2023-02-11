import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Contact } from './pages';
function App() {
 
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
